import { createApp } from "vue";
// import Vant from 'vant'
// import 'vant/lib/index.css' // 全局引入样式
import 'amfe-flexible';

// import "./utils/lib/before-load";
import "./assets/styles/index.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directive from './utils/directive';

const app = createApp(App);
app.use(store).use(router).mount('#app');

directive(app);
