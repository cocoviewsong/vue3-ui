<template>
  <CoButton type="default">default Button</CoButton>
  <CoButton type="primary" @click="handleClick">primary Button</CoButton>
  <CoButton type="danger">danger Button</CoButton>
  <CoButton type="success">success Button</CoButton>
  <CoButton type="warning">warning Button</CoButton>
  <CoButton type="disabled" disabled>Disabled Button</CoButton>
</template>

<script setup lang="ts">
const handleClick = (e: MouseEvent) => {
  console.log('click', e);
};
</script>
