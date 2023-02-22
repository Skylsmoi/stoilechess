import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ChessBoard from "./components/ChessBoard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/game/:playerColor", component: ChessBoard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
