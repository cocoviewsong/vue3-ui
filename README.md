# Vue3 UI 库

自己项目中多次使用过的组件

## 下载源码后启动项目

**需要 Node.js 版本 18+ 或 20+**

`npm i`

`npm run dev`

## 使用

### 通过 copy 源码

进入**src/components**文件目录，找到组件，直接复制

### 通过 npm 使用

`npm i cocoviewsong-vue3-ui`

**main.ts**

`import { createApp } from 'vue';

import App from './App.vue';

// 导入组件库和样式

import CocoviewsongUI from 'cocoviewsong-vue3-ui';

import 'cocoviewsong-vue3-ui/dist/style.css';

const app = createApp(App);

app.use(CocoviewsongUI);

app.mount('#app');
`

**.vue**

`<template>
  <CoButton>Click Me</CoButton>
  <CoToolTip type="bottom" tipText="提示文字下">
    <span> 提示文本在- 下 </span>
  </CoToolTip>
  <CoToolTip type="right">
      <span> 提示文本在- 右 </span>
      <template #tooltip-content>提示文字</template>
  </CoToolTip>
</template>`

## 目录结构

```
vue3-ui
├─ 📁.vscode
│  └─ 📄extensions.json
├─ 📁public
│  └─ 📄favicon.ico
├─ 📁src
│  ├─ 📁assets
│  │  ├─ 📁css
│  │  │  ├─ 📁button
│  │  │  │  └─ 📄index.css
│  │  │  ├─ 📁tool-tip
│  │  │  │  └─ 📄index.css
│  │  │  ├─ 📄common.css
│  │  │  ├─ 📄index.css
│  │  │  ├─ 📄reset.css
│  │  │  └─ 📄variable.css
│  │  └─ 📁icon
│  ├─ 📁components
│  │  ├─ 📁button
│  │  │  ├─ 📁demo
│  │  │  │  └─ 📄index.vue
│  │  │  ├─ 📁__tests__
│  │  │  │  └─ 📄CoButton.test.ts
│  │  │  └─ 📄CoButton.vue
│  │  └─ 📁tool-tip
│  │     ├─ 📁demo
│  │     │  └─ 📄index.vue
│  │     └─ 📄CoToolTip.vue
│  ├─ 📁router
│  │  └─ 📄index.ts
│  ├─ 📁utils
│  │  ├─ 📄theme.d.ts
│  │  └─ 📄theme.ts
│  ├─ 📄App.vue
│  ├─ 📄index.ts
│  └─ 📄main.ts
├─ 📄.gitignore
├─ 📄env.d.ts
├─ 📄index.html
├─ 📄LICENSE
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
├─ 📄tsconfig.app.json
├─ 📄tsconfig.json
├─ 📄tsconfig.node.json
├─ 📄tsconfig.vitest.json
├─ 📄vite.config.ts
└─ 📄vitest.config.ts
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
