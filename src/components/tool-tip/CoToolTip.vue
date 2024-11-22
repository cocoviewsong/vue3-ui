<template>
  <div
    class="custom-title-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot name="tooptip-desc">Default Tooptip Desc</slot>
    <div v-if="isTooltipVisible" class="tooltip">
      <slot name="tooltip-content">Default Tooltip Content</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isTooltipVisible = ref(false);

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
  top: 125%;
  left: 50%;
  padding: 6px 12px;
  font-size: 16px;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: 0.5px 1px 1px hsl(var(--tool-tip-boder-shadow) / 0.333);
  color: var(--tool-tip-text-color);
  background: var(--tool-tip-bg-color);
  border: 2px solid var(--tool-tip-boder-color);
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
