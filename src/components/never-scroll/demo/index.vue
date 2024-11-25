<template>
  <CoNeverScroll class="wrap">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
  </CoNeverScroll>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes scrollLeft {
  to {
    left: -100%;
  }
}

.wrap {
  position: relative;
  width: 700px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid var(--text-primary);
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

.item {
  position: absolute;
  left: max(calc(200px * 6), 100%);
  width: 200px;
  height: 100px;
  line-height: 100px;
  border-radius: 9px;
  background-color: var(--text-tertiary);
  animation-name: scrollLeft;
  animation-duration: var(--animation-duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  text-align: center;
}

.item1 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 1) * -1);
}
.item2 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 2) * -1);
}
.item3 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 3) * -1);
}
.item4 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 4) * -1);
}
.item5 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 5) * -1);
}
.item6 {
  animation-delay: calc(var(--animation-duration) / 6 * (6 - 6) * -1);
}
</style>
