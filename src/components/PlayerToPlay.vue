<script setup>
import { useCurrentPlayerStore } from "../store/currentPlayer.js";
const currentPlayer = useCurrentPlayerStore();
</script>
<template>
  <div class="playerToPlay">
    <div :class="{ colorIcon: true, [currentPlayer.color]: true }"></div>
    {{ currentPlayer.color }} to play
  </div>
</template>
<style scoped>
.playerToPlay {
}
.colorIcon {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid;
}
.colorIcon.black {
  background-color: #333;
  border-color: #ccc;
}
.colorIcon.white {
  background-color: #eee;
  border-color: #333;
}
.playerToPlay:first-letter {
  text-transform: uppercase;
}
</style>
