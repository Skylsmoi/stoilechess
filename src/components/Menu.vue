<template>
  <ui-tab-bar v-model="activeTab">
    <ui-tab
      v-for="(menuItem, i) in menuItemList"
      :text="menuItem.text"
      @click="() => onClickMenuItem(i)"
      :key="i"
    ></ui-tab>
  </ui-tab-bar>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { PLAYER_COLOR } from "../store/currentPlayer.js";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user.js";

const router = useRouter();
const user = useUserStore();

const colorList = Object.values(PLAYER_COLOR).map((c) => ({
  text: `Start as ${c.label}`,
  url: `/game/${c.label}`,
}));
const menuItemList = computed(() => [
  { text: "Home", url: "/" },
  ...(user.isLoggedIn ? colorList : []),
]);
const activeTab = ref(0);
watch(
  () => user.isLoggedIn,
  (newIsLoggedIn, oldIsLoggedIn) => {
    activeTab.value = 0;
  }
);

const onClickMenuItem = (newActiveTab) => {
  // no need to update activeTab since it is bind using v-model
  router.push({ path: menuItemList.value[newActiveTab].url });
};
</script>

<style scoped>
.navMenu > .navMenu__item {
  margin-right: 15px;
}
</style>
