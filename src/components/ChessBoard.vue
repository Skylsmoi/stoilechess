<script setup>
import { ref } from "vue";
import BoardCell from "./BoardCell.vue";
import MoveHistory from "./MoveHistory.vue";
import ResetButton from "./ResetButton.vue";

import { useCurrentPlayerStore } from "../store/currentPlayer.js";
import { useBoardStore } from "../store/board.js";

import {
  columnList,
  rowList,
  CELL_CONTENT,
  isChessPiece,
  cleanMoveAction,
} from "../helper.js";
import { buildAvailablePieceActionList } from "../previewMove.js";

const board = useBoardStore();
const currentPlayer = useCurrentPlayerStore();

let lastClickedCell = null;

const resetBoard = () => {
  board.resetBoard();
  currentPlayer.resetPlayer();
};
resetBoard();

const userAction = (column, row, piece) => {
  const clickedCell = { column, row, piece };

  if (isChessPiece(clickedCell.piece.cellContent)) {
    const availablePieceActionList = buildAvailablePieceActionList(
      board.matrix,
      clickedCell
    );
    board.updateBoardMatrix(availablePieceActionList);
  } else if (
    clickedCell.piece.cellContent === CELL_CONTENT.MOVE ||
    clickedCell.piece.cellContent === CELL_CONTENT.TAKE
  ) {
    board.addMoveHistory(clickedCell, lastClickedCell);
    board.matrix[lastClickedCell.column][lastClickedCell.row] = null;
    board.matrix[column][row] = lastClickedCell.piece;
    cleanMoveAction(board.matrix);
    switchPlayer();
  }

  lastClickedCell = clickedCell;
};

const switchPlayer = () => {
  currentPlayer.switchPlayer();
};
</script>

<template>
  <div>
    <div class="game">
      <table class="board">
        <tr v-for="row in rowList" class="row" :key="row">
          <td v-for="column in columnList" class="cell" :key="column">
            <BoardCell
              :column="column"
              :row="row"
              v-on:userAction="userAction"
            />
          </td>
        </tr>
      </table>
    </div>
    <MoveHistory />
  </div>
  <ResetButton v-on:userReset="resetBoard" />
</template>

<style scoped>
.game {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.board,
.row {
  border: 1px solid;
}
.board {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
.cell {
  position: relative;
  width: 12.5%;
  border: 1px solid;
}
.cell:after {
  content: "";
  display: block;
  margin-top: 100%;
}
.row:nth-child(odd) .cell:nth-child(even) {
  background-color: #72965b;
}
.row:nth-child(odd) .cell:nth-child(odd) {
  background-color: #edeed2;
}
.row:nth-child(even) .cell:nth-child(even) {
  background-color: #edeed2;
}
.row:nth-child(even) .cell:nth-child(odd) {
  background-color: #72965b;
}
</style>
