import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(false);
  const username = ref("");
  const email = ref("");
  const winRatio = ref(0);

  const logIn = (user) => {
    username.value = user.username;
    email.value = user.email;
    winRatio.value = user.winRatio;
    isLoggedIn.value = true;
  };

  const logOut = () => {
    username.value = "";
    email.value = "";
    winRatio.value = 0;
    isLoggedIn.value = false;
  };

  return {
    isLoggedIn,
    username,
    email,
    winRatio,
    logIn,
    logOut,
  };
});
