<template>
  <div
    class="custom-title-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot name="default">Default Tooptip Desc</slot>
    <div
      v-if="isTooltipVisible"
      class="tooltip"
      :style="{ top: toolTipPosition.top, left: toolTipPosition.left }"
    >
      <slot name="tooltip-content"> {{ tipText }} </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'top' | 'left' | 'right' | 'bottom'>,
  },
  tipText: {
    type: String,
    default: 'Default Tooltip Content',
  },
});

const isTooltipVisible = ref(false);

const toolTipPosition = computed(() => {
  switch (props.type) {
    case 'bottom':
      return {
        top: '200%',
        left: '50%',
      };
    case 'top':
      return {
        top: '-100%',
        left: '50%',
      };
    case 'left':
      return {
        top: '50%',
        left: '-50%',
      };
    case 'right':
      return {
        top: '50%',
        left: '150%',
      };
    default:
      return {
        top: '205%',
        left: '50%',
      };
  }
});

const showTooltip = () => {
  isTooltipVisible.value = true;
};
const hideTooltip = () => {
  isTooltipVisible.value = false;
};
</script>

<style scoped>
.custom-title-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  padding: 6px 12px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  box-shadow: 0.5px 1px 1px hsl(var(--tool-tip-boder-shadow) / 0.333);
  color: var(--tool-tip-text-color);
  background: var(--tool-tip-bg-color);
  border: 2px solid var(--tool-tip-boder-color);
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
