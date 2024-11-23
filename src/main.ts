import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/index.css';
import { ThemeManager } from './utils/theme';
import CoComponentsPlugin from '.';

const app = createApp(App);

app.use(router);
app.use(CoComponentsPlugin);

ThemeManager.init('dark');
app.mount('#app');
