import { createApp } from 'vue';
import App from './APP.vue';
import router from './routers/index.js';

const app = createApp(App);
app.use(router);
app.mount('#app');

