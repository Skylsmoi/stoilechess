import { defineStore } from "pinia";
import { ref } from "vue";
import {
  ACTION_TYPE,
  buildMoveName,
  columnList,
  emptyBoard,
  initialPiecePosition,
  rowList,
} from "../helper.js";
import { useCurrentPlayerStore } from "./currentPlayer.js";

export const useBoardStore = defineStore("board", () => {
  const matrix = ref(emptyBoard);
  const moveHistoryList = ref([]);
  const turn = ref(1);

  const currentPlayer = useCurrentPlayerStore();

  const resetBoard = () => {
    // INFO - CH - 20230207 - We cannot do boardMatrix.value = initialPiecePosition
    // because it set a reference to initialPiecePosition and will update it when
    // updating boardMatrix
    for (const column of columnList) {
      matrix.value[column] = {};
      for (const row of rowList) {
        matrix.value[column][row] = initialPiecePosition[column][row];
      }
    }
    moveHistoryList.value = [];
    turn.value = 1;
  };

  const updateBoardMatrix = (actionList) => {
    actionList.forEach((action) => {
      matrix.value[action.column][action.row] = {
        player: currentPlayer.id,
        savedCellContent:
          action.actionType === ACTION_TYPE.TAKE
            ? matrix.value[action.column][action.row].cellContent
            : undefined,
        cellContent: action.actionType,
      };
    });
  };

  const addMoveHistory = (clickedCell, lastClickedCell) => {
    moveHistoryList.value = [
      ...moveHistoryList.value,
      {
        turn: turn.value,
        player: currentPlayer.id,
        moveName: buildMoveName(matrix.value, clickedCell, lastClickedCell),
      },
    ];
    // INFO - CH - 20230209 - alternative implementation
    // moveHistoryList.value.push({
    //   turn: turn,
    //   player: currentPlayer.id,
    //   moveName: buildMoveName(matrix.value, clickedCell, lastClickedCell),
    // });
  };

  const addTurn = () => {
    turn.value++;
  };

  return {
    matrix,
    moveHistoryList,
    turn,
    resetBoard,
    updateBoardMatrix,
    addMoveHistory,
    addTurn,
  };
});
