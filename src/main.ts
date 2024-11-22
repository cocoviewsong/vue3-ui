import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/index.css';
import { ThemeManager } from './utils/theme';
import CoButtonPlugin from './components';

const app = createApp(App);

app.use(router);
app.use(CoButtonPlugin);
ThemeManager.init();
app.mount('#app');
