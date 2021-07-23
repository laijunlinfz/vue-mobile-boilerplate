import { createApp } from "vue";
import "./utils/lib/before-load";
import "./assets/style/index.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
