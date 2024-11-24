<template>
  <span v-if="!disableTransitions" :class="classes" @click="handleClick">
    <slot></slot>
    <i v-if="closable" @click="handleClose">X</i>
  </span>

  <Transition v-else>
    <span :class="classes" @click="handleClick">
      <slot></slot>
      <i v-if="closable" @click="handleClose"></i>
    </span>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const propsSize: {
  size?: number;
} = {};

const props = defineProps({
  closable: Boolean,
  disableTransitions: Boolean,
  type: {
    type: String,
    default: '',
  },
  hit: Boolean,
  size: {
    type: String,
    default: '',
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);

const tagSize = computed(() => {
  return props.size || (propsSize || {}).size;
});

const classes = computed(() => {
  const { type, hit, checked } = props;
  return [
    'co-tag',
    hit && 'is-hit',
    type && `co-tag--${type}`,
    tagSize.value && `co-tag--${tagSize.value}`,
    checked && 'co-tag--checked',
  ];
});

const handleClick = (event: MouseEvent) => {
  emits('close', event);
};

const handleClose = (event: MouseEvent) => {
  event.stopPropagation();
  emits('close', event);
};
</script>
