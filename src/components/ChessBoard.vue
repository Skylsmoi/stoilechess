<script setup>
import { ref } from "vue";
import BoardCell from "./BoardCell.vue";
import MoveHistory from "./MoveHistory.vue";
import ResetButton from "./ResetButton.vue";

import {
  columnList,
  rowList,
  initialPiecePosition,
  emptyBoard,
  updateBoardMatrix,
  CELL_CONTENT,
  isChessPiece,
  cleanMoveAction,
  buildMoveName,
} from "../helper.js";
import { buildAvailablePieceActionList } from "../previewMove.js";

const boardMatrix = ref(emptyBoard);
const currentPlayer = ref(1);
const moveHistoryList = ref([]);
let turn = 1;

let lastClickedCell = null;

const resetBoard = () => {
  // INFO - CH - 20230207 - We cannot do boardMatrix.value = initialPiecePosition
  // because it set a reference to initialPiecePosition and will update it when
  // updating boardMatrix
  for (const column of columnList) {
    boardMatrix.value[column] = {};
    for (const row of rowList) {
      boardMatrix.value[column][row] = initialPiecePosition[column][row];
    }
  }
  currentPlayer.value = 1;
  moveHistoryList.value = [];
};
resetBoard();

const userAction = (column, row, piece) => {
  const clickedCell = { column, row, piece };

  if (isChessPiece(clickedCell.piece.cellContent)) {
    const availablePieceActionList = buildAvailablePieceActionList(
      boardMatrix.value,
      clickedCell
    );
    updateBoardMatrix(
      boardMatrix.value,
      availablePieceActionList,
      currentPlayer.value
    );
  } else if (
    clickedCell.piece.cellContent === CELL_CONTENT.MOVE ||
    clickedCell.piece.cellContent === CELL_CONTENT.TAKE
  ) {
    moveHistoryList.value.push({
      turn: turn,
      player: currentPlayer,
      moveName: buildMoveName(boardMatrix, clickedCell, lastClickedCell),
    });
    boardMatrix.value[lastClickedCell.column][lastClickedCell.row] = null;
    boardMatrix.value[column][row] = lastClickedCell.piece;
    cleanMoveAction(boardMatrix.value);
    switchPlayer();
  }

  lastClickedCell = clickedCell;
};

const switchPlayer = () => {
  if (currentPlayer.value === 1) currentPlayer.value = 2;
  else if (currentPlayer.value === 2) {
    currentPlayer.value = 1;
    turn = turn + 1;
  }
};
</script>

<template>
  <div class="game">
    <table class="board">
      <tr v-for="row in rowList" class="row" :key="row">
        <td v-for="column in columnList" class="cell" :key="column">
          <BoardCell
            :column="column"
            :row="row"
            :piece="boardMatrix[column][row]"
            :currentPlayer="currentPlayer"
            v-on:userAction="userAction"
          />
        </td>
      </tr>
    </table>
    <MoveHistory :moveHistoryList="moveHistoryList" />
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
