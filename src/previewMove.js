import {
  CELL_CONTENT,
  MOVE_DIRECTION,
  ACTION_TYPE,
  moveRow,
  moveColumn,
} from "./helper.js";

export const buildAvailablePieceActionList = (boardMatrix, clickedCell) => {
  switch (clickedCell.piece.cellContent) {
    case CELL_CONTENT.PON:
      return previewPonMove(boardMatrix, clickedCell);
    default:
      return [];
  }
};

const previewPonMove = (boardMatrix, clickedCell) => {
  const direction =
    clickedCell.piece.player === 1 ? MOVE_DIRECTION.UP : MOVE_DIRECTION.DOWN;

  if (direction === MOVE_DIRECTION.UP && clickedCell.row === 8) return [];
  if (direction === MOVE_DIRECTION.DOWN && clickedCell.row === 1) return [];

  const availableMoveList = [];
  const isNextRowAvailable =
    boardMatrix[clickedCell.column][moveRow(clickedCell.row, direction, 1)] ===
    null;
  if (isNextRowAvailable) {
    availableMoveList.push({
      column: clickedCell.column,
      row: moveRow(clickedCell.row, direction, 1),
      actionType: ACTION_TYPE.MOVE,
    });
  }

  if (
    (clickedCell.piece.player === 1 && clickedCell.row === 2) ||
    (clickedCell.piece.player === 2 && clickedCell.row === 7)
  ) {
    const isNextPlus2RowAvailable =
      boardMatrix[clickedCell.column][
        moveRow(clickedCell.row, direction, 2)
      ] === null;
    if (isNextPlus2RowAvailable === true) {
      availableMoveList.push({
        column: clickedCell.column,
        row: moveRow(clickedCell.row, direction, 2),
        actionType: ACTION_TYPE.MOVE,
      });
    }
  }

  const nextLeftCell =
    boardMatrix[moveColumn(clickedCell.column, MOVE_DIRECTION.LEFT, 1)][
      moveRow(clickedCell.row, direction, 1)
    ];
  const isTakeLeftAvailable =
    nextLeftCell === null
      ? false
      : nextLeftCell.player !== clickedCell.piece.player;
  if (isTakeLeftAvailable) {
    availableMoveList.push({
      column: moveColumn(clickedCell.column, MOVE_DIRECTION.LEFT, 1),
      row: moveRow(clickedCell.row, direction, 1),
      actionType: ACTION_TYPE.TAKE,
    });
  }

  const nextRightCell =
    boardMatrix[moveColumn(clickedCell.column, MOVE_DIRECTION.RIGHT, 1)][
      moveRow(clickedCell.row, direction, 1)
    ];
  const isTakeRightAvailable =
    nextRightCell === null
      ? false
      : nextRightCell.player !== clickedCell.piece.player;
  if (isTakeRightAvailable) {
    availableMoveList.push({
      column: moveColumn(clickedCell.column, MOVE_DIRECTION.RIGHT, 1),
      row: moveRow(clickedCell.row, direction, 1),
      actionType: ACTION_TYPE.TAKE,
    });
  }

  return availableMoveList;
};
