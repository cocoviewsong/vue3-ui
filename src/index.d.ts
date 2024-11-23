import { App } from 'vue';
import { ThemeManager } from './utils/theme';
import CoButton from './components/button/CoButton.vue';
import CoToolTip from './components/tool-tip/CoToolTip.vue';

export { CoButton, CoToolTip, ThemeManager };

declare const _default: {
  install(app: App): void;
};
export default _default;
