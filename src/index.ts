import type { App } from 'vue';
import CoBadge from '@/components/badge/CoBadge.vue';
import CoButton from '@/components/button/CoButton.vue';
import CoNeverScroll from '@/components/never-scroll/CoNeverScroll.vue';
import CoTag from '@/components/tag/CoTag.vue';
import CoToolTip from '@/components/tool-tip/CoToolTip.vue';
import CoVideo from '@/components/video/CoVideo.vue';
import { ThemeManager } from '@/utils/theme';
import '@/assets/css/index.css';

export { CoBadge, CoButton, CoNeverScroll, CoTag, CoToolTip, CoVideo, };

export default {
  install(app: App) {
    app.component('CoBadge', CoBadge);
app.component('CoButton', CoButton);
app.component('CoNeverScroll', CoNeverScroll);
app.component('CoTag', CoTag);
app.component('CoToolTip', CoToolTip);
app.component('CoVideo', CoVideo);
    ThemeManager;
  },
};