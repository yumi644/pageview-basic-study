import { createApp } from 'vue';
import App from './APP.vue';
import router from './routers/index.js';
import store from './store/index.js'; // 导入 store
import axios from 'axios';
import VLadder from 'vladder'
import 'vladder/dist/style.css'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(elementPlus);
app.use(router);
app.use(VLadder);
// app.use(pinia); // 注册 pinia
app.use(store); // 注册 store
app.mount('#app');

