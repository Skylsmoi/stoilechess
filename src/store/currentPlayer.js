import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBoardStore } from "./board.js";

export const PLAYER_COLOR = {
  WHITE: {
    id: 1,
    label: "white",
  },
  BLACK: {
    id: 2,
    label: "black",
  },
};

export const useCurrentPlayerStore = defineStore("currentPlayer", () => {
  const id = ref(1);
  const color = computed(() =>
    id.value === 1 ? PLAYER_COLOR.WHITE.id : PLAYER_COLOR.BLACK.id
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

  const resetPlayer = (playerColor) => {
    if (!playerColor) {
      forcePlayerId(PLAYER_COLOR.WHITE.id);
      return;
    }
    const newColor =
      PLAYER_COLOR.WHITE.label === playerColor
        ? PLAYER_COLOR.WHITE.id
        : PLAYER_COLOR.BLACK.id;
    forcePlayerId(newColor);
  };

  return {
    id,
    color,
    switchPlayer,
    resetPlayer,
    forcePlayerId,
  };
});
