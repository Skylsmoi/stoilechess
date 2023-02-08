<script setup>
import { defineEmits } from "vue";

import PieceItem from "./PieceItem.vue";
const props = defineProps({
  column: String,
  row: Number,
  piece: Object,
  currentPlayer: Number,
});

const emit = defineEmits(["userAction"]);
const userAction = () => {
  emit("userAction", props.column, props.row, props.piece);
};
</script>

<template>
  <div
    class="boardCell"
    v-on:click="
      (e) =>
        props?.currentPlayer === props.piece.player ? userAction(e) : null
    "
  >
    <PieceItem
      v-if="props.piece !== null"
      :player="props.piece.player"
      :cellContent="props.piece.cellContent"
    />
    <div v-if="props.column === 'a'" class="cellName row">{{ row }}</div>
    <div v-if="props.row === 1" class="cellName column">{{ column }}</div>
  </div>
</template>

<style scoped>
.boardCell {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
}
.cellName {
  position: absolute;
  font-size: 8px;
  color: #fff;
}
.cellName.column {
  bottom: 0;
  right: 3px;
}
.cellName.row {
  top: 1px;
  left: 3px;
}
</style>
