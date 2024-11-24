<template>
  <button
    class="co-button"
    :class="[
      `co-button--${type}`,
      { 'co-button--disabled': disabled },
      { 'co-flex-center': icon },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="btn-icon" v-if="icon">
      <svg viewBox="0 0 1024 1024" :width="iconWidth" :height="iconHeight">
        <path
          d="M554.666667 469.333333l-42.666667-85.333333h-42.666667v256h213.333334v-170.666667h-128z m-128-42.666666V341.333333h119.466666l38.4 85.333334H725.333333v256h-298.666666v-256z m106.666666 469.333333C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333zM341.333333 426.666667h42.666667v256H341.333333v-256z"
          :fill="iconColor"
        ></path>
      </svg>
    </slot>
    <div
      :style="{
        height: height + 'px',
        width: width + 'px',
        lineHeight: height + 'px',
        fontSize: fontSize + 'px',
      }"
    >
      <slot name="default">默认按钮</slot>
    </div>
  </button>
</template>

<script setup lang="ts">
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
  icon: {
    type: Boolean,
    default: false,
  },
  iconWidth: {
    type: String,
    default: '30',
  },
  iconHeight: {
    type: String,
    default: '30',
  },
  iconColor: {
    type: String,
    default: '#333',
  },
  width: {
    type: String,
  },
  height: {
    type: String,
    default: '30',
  },
  fontSize: {
    type: String,
    default: '16',
  },
});

// 定义 emits
const emits = defineEmits(['click']);

// 点击事件处理函数
function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emits('click', event);
  }
}
</script>
