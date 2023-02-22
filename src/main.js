import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router.js";

import BalmUI from "balm-ui"; // Official Google Material Components
import BalmUIPlus from "balm-ui-plus"; // BalmJS Team Material Components
import "balm-ui-css";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(BalmUI);
app.use(BalmUIPlus);
app.use(router);
app.mount("#app");
