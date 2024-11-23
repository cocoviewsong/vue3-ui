<template>
  <div class="co-tip-wrap">
    <!-- 不使用插槽 -->
    <CoToolTip type="bottom" tipText="提示文字下">
      <span> 提示文本在- 下 </span>
    </CoToolTip>

    <CoToolTip type="top" tipText="提示文字上">
      <span> 提示文本在- 上 </span>
    </CoToolTip>

    <!-- 插槽 -->
    <CoToolTip type="left">
      <span> 提示文本在- 左 </span>
      <template #tooltip-content>提示文字</template>
    </CoToolTip>

    <CoToolTip type="right">
      <span> 提示文本在- 右 </span>
      <template #tooltip-content>提示文字</template>
    </CoToolTip>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.co-tip-wrap {
  display: flex;
  margin-left: 10vw;
  padding: 50px;
  gap: 90px;

  span {
    font-size: 16px;
    color: var(--text-primary);
  }
}
</style>
