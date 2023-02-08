export const CELL_CONTENT = {
  PON: "pon",
  ROOK: "rook",
  KNIGHT: "knight",
  BISHOP: "bishop",
  QUEEN: "queen",
  KING: "king",
  MOVE: "move",
  TAKE: "take",
};
export const ONE_LETTER_PIECE_MAPPING = {
  [CELL_CONTENT.PON]: "",
  [CELL_CONTENT.ROOK]: "R",
  [CELL_CONTENT.KNIGHT]: "N",
  [CELL_CONTENT.BISHOP]: "B",
  [CELL_CONTENT.QUEEN]: "Q",
  [CELL_CONTENT.KING]: "K",
};
export const MOVE_DIRECTION = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};
export const ACTION_TYPE = {
  MOVE: "move",
  TAKE: "take",
};

export const columnList = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const rowList = [1, 2, 3, 4, 5, 6, 7, 8].reverse();

export const initialPiecePosition = {
  a: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.ROOK,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.ROOK,
    },
  },
  b: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.KNIGHT,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.KNIGHT,
    },
  },
  c: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.BISHOP,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.BISHOP,
    },
  },
  d: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.QUEEN,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.QUEEN,
    },
  },
  e: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.KING,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.KING,
    },
  },
  f: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.BISHOP,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.BISHOP,
    },
  },
  g: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.KNIGHT,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.KNIGHT,
    },
  },
  h: {
    1: {
      player: 1,
      cellContent: CELL_CONTENT.ROOK,
    },
    2: {
      player: 1,
      cellContent: CELL_CONTENT.PON,
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      player: 2,
      cellContent: CELL_CONTENT.PON,
    },
    8: {
      player: 2,
      cellContent: CELL_CONTENT.ROOK,
    },
  },
};

export const emptyBoard = {
  a: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  b: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  c: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  d: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  e: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  f: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  g: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
  h: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  },
};

export const moveRow = (startRow, direction, distance) => {
  if (direction === MOVE_DIRECTION.UP) {
    if (startRow >= 8) return 8;
    return startRow + distance;
  }
  if (direction === MOVE_DIRECTION.DOWN) {
    if (startRow <= 0) return 0;
    return startRow - distance;
  }
};

export const moveColumn = (startColumn, direction, distance) => {
  if (direction === MOVE_DIRECTION.LEFT) {
    if (startColumn === "a") return columnList[0];
    return columnList[columnList.indexOf(startColumn) - distance];
  }
  if (direction === MOVE_DIRECTION.RIGHT) {
    if (startColumn === "h") return columnList[7];
    return columnList[columnList.indexOf(startColumn) + distance];
  }
};

export const isChessPiece = (cellContent) => {
  return Object.values(CELL_CONTENT)
    .filter((cell) => cell !== CELL_CONTENT.MOVE && cell !== CELL_CONTENT.TAKE)
    .some((cell) => cell === cellContent);
};

export const cleanMoveAction = (boardMatrix) => {
  for (const column of columnList) {
    for (const row of rowList) {
      if (boardMatrix[column][row]?.cellContent === CELL_CONTENT.MOVE) {
        boardMatrix[column][row] = null;
      }
      if (boardMatrix[column][row]?.cellContent === CELL_CONTENT.TAKE) {
        boardMatrix[column][row] = {
          player: boardMatrix[column][row].player === 1 ? 2 : 1,
          cellContent: boardMatrix[column][row].savedCellContent,
          savedCellContent: undefined,
        };
      }
    }
  }
};
export const buildMoveName = (boardMatrix, clickedCell, lastClickedCell) => {
  if (lastClickedCell.piece.cellContent === CELL_CONTENT.PON) {
    if (clickedCell.piece.cellContent === CELL_CONTENT.TAKE) {
      return `${lastClickedCell.column}x${clickedCell.column}${clickedCell.row}`;
    }
    return `${clickedCell.column}${clickedCell.row}`;
  }
  return "";
};
