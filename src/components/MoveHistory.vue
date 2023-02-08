<script setup>
import { computed } from "vue";

import { useBoardStore } from "../store/board.js";

const board = useBoardStore();

const computedMoveList = computed(() => {
  return board.moveHistoryList.map((move, i) =>
    i % 2 === 0 ? move : { ...move, turn: null }
  );
});
</script>
<template>
  <div>
    <span v-for="move in computedMoveList">
      <span v-if="move.turn !== null" class="turn">{{ move.turn }}. </span>
      {{ move.moveName }}
    </span>
  </div>
</template>
<style scoped>
.turn {
  margin-left: 5px;
}
</style>
