<template>
  <div class="co-badge">
    <slot></slot>
    <transition name="co-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0)"
        :style="supStyle"
        class="co-badge-right--top"
      >
        {{ content }}
      </sup>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    value?: string | number;
    max?: number;
    hidden?: boolean;
    color?: string;
    size?: string | number;
  }>(),
  { color: `var(--text-primary)`, hidden: false, size: '16' }
);

const content = computed(() => {
  const { max, value } = props;
  if (typeof value === 'number' && typeof max === 'number') {
    return max < value ? `${max}+` : value;
  }
  return value;
});

const supStyle = computed(() => {
  const { color, size } = props;
  return {
    color,
    fontSize: size + 'px',
  };
});
</script>
