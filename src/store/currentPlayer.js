import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBoardStore } from "./board.js";

export const PLAYER_COLOR = {
  WHITE: "white",
  BLACK: "black",
};

export const useCurrentPlayerStore = defineStore("currentPlayer", () => {
  const id = ref(1);
  const color = computed(() =>
    id.value === 1 ? PLAYER_COLOR.WHITE : PLAYER_COLOR.BLACK
  );

  const board = useBoardStore();
  const switchPlayer = () => {
    if (id.value === 1) id.value = 2;
    else if (id.value === 2) {
      id.value = 1;
      board.addTurn();
    }
  };

  const forcePlayerId = (newId) => {
    if ([1, 2].some((validId) => validId === newId) === false) {
      console.error(
        "Error, forcePlayerId called with invalid id. Valid id are 1, 2"
      );
      return;
    }
    id.value = newId;
  };

  const resetPlayer = () => {
    forcePlayerId(1);
  };

  return {
    id,
    color,
    switchPlayer,
    resetPlayer,
    forcePlayerId,
  };
});
