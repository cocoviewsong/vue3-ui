<template>
  <div class="nav">
    <ul>
      <template v-for="item in navList">
        <li>
          <RouterLink :to="item.url">
            {{ item.text }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
  <RouterView></RouterView>
  <div class="dark-toggle" @click="toggleDark">黑暗模式</div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { ThemeManager } from './utils/theme';

const navList = [
  {
    url: '/button',
    text: '按钮',
  },
  {
    url: '/tool-tip',
    text: '文字提示',
  },
  {
    url: '/tag',
    text: '标签',
  },
  {
    url: '/badge',
    text: '上标',
  },
  {
    url: '/video',
    text: '分片播放',
  },
];

const toggleDark = () => {
  const themeDataset = document.documentElement.dataset;

  if (themeDataset.theme === 'dark') {
    document.documentElement.className = 'cocoviewsong-light';
    themeDataset.theme = 'light';
    ThemeManager.setTheme('light');
  } else {
    document.documentElement.className = 'cocoviewsong-dark';
    themeDataset.theme = 'dark';
    ThemeManager.setTheme('dark');
  }
};
</script>

<style scoped>
.nav {
  float: left;
  position: relative;
  left: 0;
  height: 100vh;

  ul {
    border-right: 1px solid var(--tool-tip-bg-color);
  }

  li,
  a {
    display: block;
    font-size: 14px;
    color: var(--text-primary);
  }

  li {
    padding: 8px 15px;
    padding-right: 25px;
    margin-top: 15px;
    box-sizing: border-box;
  }

  li:hover {
    text-decoration: underline;
  }

  .router-link-active {
    color: #f77;
  }
}
.nav::after {
  content: '';
  clear: both;
}

.dark-toggle {
  position: fixed;
  padding: 0 12px;
  color: var(--text-secondary);
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  line-height: 32px;
  border-radius: var(--co-border-radius);
  transition: all var(--co-transition-duration);
  font-size: 14px;
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
