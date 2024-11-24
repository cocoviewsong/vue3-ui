<template>
  <CoBadge value="12"> default color </CoBadge>
  <CoBadge value="1" color="#f77"> Another color </CoBadge>
  <CoBadge :value="count" color="green" :max="99" :size="12">
    上限99的count
  </CoBadge>

  <CoButton type="primary" @click="addCount">点我count+1</CoButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(98);

const addCount = () => {
  count.value = count.value + 1;
};
</script>

<style scoped>
div {
  color: var(--text-primary);
  margin-bottom: 15px;
}
</style>
