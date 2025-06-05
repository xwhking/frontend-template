import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './app.vue';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import router from "./MyRoute/MyRoute.js";

const app = createApp(App);
app.use(TDesign)
app.use(router)
app.mount('#app');