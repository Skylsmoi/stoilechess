<template>
  <h1>Home page</h1>
  <LoginForm v-if="user.isLoggedIn === false" />
  <div v-else>
    Hi {{ user.username }}
    <br />
    <ui-button type="text" outlined @click="logOut">Log out</ui-button>
  </div>
</template>

<script setup>
import LoginForm from "./LoginForm.vue";
import { useUserStore } from "../store/user.js";
const user = useUserStore();
const logOut = () => {
  user.logOut();
};
</script>
