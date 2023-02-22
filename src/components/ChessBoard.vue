<script setup>
import BoardCell from "./BoardCell.vue";
import PlayerToPlay from "./PlayerToPlay.vue";
import MoveHistory from "./MoveHistory.vue";
import ResetButton from "./ResetButton.vue";

import { useCurrentPlayerStore } from "../store/currentPlayer.js";
import { useBoardStore } from "../store/board.js";

import { useRoute } from "vue-router";

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

const route = useRoute();

const resetBoard = () => {
  board.resetBoard();
  currentPlayer.resetPlayer(route.params.playerColor);
};
resetBoard();

const userAction = (clickedCell = { column, row, piece }) => {
  if (
    clickedCell.piece !== null &&
    clickedCell.piece.player !== currentPlayer.id
  ) {
    return;
  }

  if (clickedCell.piece === null) {
    cleanMoveAction(board.matrix);
  } else if (isChessPiece(clickedCell.piece.cellContent)) {
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
  <div class="container">
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
    <div class="gameInfo">
      <PlayerToPlay />
      <MoveHistory />
    </div>
  </div>
  <ResetButton v-on:userReset="resetBoard" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.gameInfo {
  width: 200px;
  padding: 10px 15px;
}
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
