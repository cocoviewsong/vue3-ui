import type { App } from 'vue';
import CoButton from '@/components/button/CoButton.vue';
import { ThemeManager } from '@/utils/theme';

export default {
  install(app: App) {
    app.component('CoButton', CoButton);
    ThemeManager;
  },
};
