<template>
  <div class="co-tip-wrap">
    <CoToolTip>
      <template #tooptip-desc>
        <span> 文本 </span>
      </template>
      <template #tooltip-content>提示文字</template>
    </CoToolTip>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.co-tip-wrap {
  margin-left: 10vw;

  span {
    font-size: 16px;
    color: var(--text-primary);
  }
}
</style>
