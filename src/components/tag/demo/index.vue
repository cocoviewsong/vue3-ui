<template>
  <div class="co-tag-warp">
    <div class="size">
      <template v-for="(tag, index) in sizeTags" :key="`size-${index}`">
        <CoTag
          :size="tag.size"
          closable
          @close="(event:MouseEvent) => handleClose(event, index)"
        >
          {{ tag.label }}
        </CoTag>
      </template>
    </div>

    <div class="type">
      <template v-for="(tag, index) in typeTags" :key="`type-${index}`">
        <CoTag :type="tag.type">
          {{ tag.label }}
        </CoTag>
      </template>
    </div>

    <div class="event">
      <CoTag type="info" checked @close="handleClose">点击Tag</CoTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sizeTags = ref([
  { size: 'mini', label: 'Mini Label' },
  { size: 'medium', label: 'Medium Label' },
  { size: '', label: 'Default Label' },
  { size: 'small', label: 'Small Label' },
]);
const typeTags = ref([
  { type: 'primary', label: 'Tag primary' },
  { type: 'success', label: 'Tag success' },
  { type: 'info', label: 'Tag info' },
  { type: 'warning', label: 'Tag warning' },
  { type: 'danger', label: 'Tag danger' },
]);
const handleClose = (event: MouseEvent, currentIndex: number) => {
  // sizeTags.value = sizeTags.value.filter((_, index) => index !== currentIndex);
  sizeTags.value.splice(currentIndex, 1);
  console.log(event, 'tag close component');
};
</script>

<style scoped>
.co-tag-warp {
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: var(--text-primary);

  span {
    margin: 6px;
  }
}
</style>
