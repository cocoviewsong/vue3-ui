<template>
  <div class="btn-wrap">
    <CoButton type="default" icon>
      <template #btn-icon>
        <svg viewBox="0 0 1024 1024" :width="32" :height="32" fill="#f77">
          <path
            d="M554.666667 469.333333l-42.666667-85.333333h-42.666667v256h213.333334v-170.666667h-128z m-128-42.666666V341.333333h119.466666l38.4 85.333334H725.333333v256h-298.666666v-256z m106.666666 469.333333C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333zM341.333333 426.666667h42.666667v256H341.333333v-256z"
          ></path>
        </svg>
      </template>
      default Button
    </CoButton>

    <CoButton type="primary" @click="handleClick">primary Button</CoButton>
    <CoButton type="danger">danger Button</CoButton>
    <CoButton type="success">success Button</CoButton>
    <CoButton type="warning" icon>warning Button</CoButton>
    <CoButton type="disabled" disabled>Disabled Button</CoButton>
  </div>
</template>

<script setup lang="ts">
const handleClick = (e: MouseEvent) => {
  console.log('click', e);
};
</script>

<style scoped>
.btn-wrap {
  padding: 8px 12px;

  button {
    margin-right: 10px;
  }

  button:last-child {
    margin-right: 0;
  }
}
</style>
