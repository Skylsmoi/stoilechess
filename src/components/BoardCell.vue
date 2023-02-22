<script setup>
import { defineEmits, computed } from "vue";

import PieceItem from "./PieceItem.vue";

import { useCurrentPlayerStore } from "../store/currentPlayer.js";
import { useBoardStore } from "../store/board.js";

const props = defineProps({
  column: String,
  row: Number,
});

const currentPlayer = useCurrentPlayerStore();
const board = useBoardStore();

const piece = computed(() => board.matrix[props.column][props.row]);

const emit = defineEmits(["userAction"]);
// const userAction = () => {
//   emit("userAction", props.column, props.row, piece.value);
// };
</script>

<template>
  <div
    class="boardCell"
    v-on:click="(e) => emit('userAction', props.column, props.row, piece)"
  >
    <!-- (e) => (currentPlayer.id === piece?.player ? userAction(e) : null) -->
    <PieceItem
      v-if="piece !== null"
      :player="piece.player"
      :cellContent="piece.cellContent"
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
