<template>
  <button
    :class="[
      'co-button',
      `co-button--${type}`,
      { 'co-button--disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { PropType } from 'vue';

// 定义 props
const props = defineProps({
  type: {
    type: String as PropType<
      'default' | 'primary' | 'success' | 'warning' | 'danger'
    >,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 定义 emits
const emit = defineEmits(['click']);

// 点击事件处理函数
function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event);
  }
}
</script>
