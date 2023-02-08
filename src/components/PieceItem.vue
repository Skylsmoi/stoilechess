<script setup>
import { computed } from "vue";
import { CELL_CONTENT } from "../helper.js";

const props = defineProps({
  player: Number,
  cellContent: String,
});

const image = computed(() => {
  if (props.cellContent === CELL_CONTENT.MOVE) return "o";
  if (props.cellContent === CELL_CONTENT.TAKE) return "X";
  if (props.player === 1) {
    switch (props.cellContent) {
      case CELL_CONTENT.PON:
        return "♙";
      case CELL_CONTENT.ROOK:
        return "♖";
      case CELL_CONTENT.KNIGHT:
        return "♘";
      case CELL_CONTENT.BISHOP:
        return "♗";
      case CELL_CONTENT.KING:
        return "♔";
      case CELL_CONTENT.QUEEN:
        return "♕";
      default:
        return "";
    }
  } else if (props.player === 2) {
    switch (props.cellContent) {
      case CELL_CONTENT.PON:
        return "♟︎";
      case CELL_CONTENT.ROOK:
        return "♜";
      case CELL_CONTENT.KNIGHT:
        return "♘";
      case CELL_CONTENT.BISHOP:
        return "♝";
      case CELL_CONTENT.KING:
        return "♚";
      case CELL_CONTENT.QUEEN:
        return "♛";
      default:
        return "";
    }
  }
  return "";
});
</script>

<template>
  <div
    :class="{
      piece: true,
      move: props.cellContent === CELL_CONTENT.MOVE,
      take: props.cellContent === CELL_CONTENT.TAKE,
      white: props.player === 1,
      black: props.player === 2,
    }"
  >
    {{ image }}
  </div>
</template>

<style scoped>
.piece {
  position: absolute;
  top: calc(50% - 48px);
  left: calc(50% - 25px);
  font-size: 60px;
  text-align: center;
  cursor: pointer;
}
.white {
  color: #fff;
}
.black {
  color: #333;
}
.move,
.take {
  color: #cbcbcb;
  top: calc(50% - 53px);
  left: calc(50% - 17px);
}
</style>
