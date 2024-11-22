<template>
  <RouterView></RouterView>
  <div class="dark-toggle" @click="toggleDark">黑暗模式</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ThemeManager } from './utils/theme';

const toggleDark = () => {
  const themeDataset = document.documentElement.dataset;

  if (themeDataset.theme === 'dark') {
    themeDataset.theme = 'light';
    ThemeManager.setTheme('light');
  } else {
    themeDataset.theme = 'dark';
    ThemeManager.setTheme('dark');
  }
};
</script>

<style scoped>
.dark-toggle {
  position: fixed;
  padding: 9px 16px;
  color: #f77;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  line-height: 32px;
  border-radius: var(--co-border-radius);
  transition: all var(--co-transition-duration);
  cursor: pointer;
}

[data-theme='dark'] .dark-toggle {
  background-color: var(--gray-900);
  color: var(--white);
}

[data-theme='light'] .dark-toggle {
  background-color: var(--gray-200);
  color: var(--gray-900);
}
</style>
