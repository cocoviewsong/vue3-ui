import fs from 'fs';
import path from 'path';
import toCamelCase from './utils/to-came-case.js';

// 更新路由文件
export function generateRouterFile(componentsDir) {
  const componentFiles = fs.readdirSync(componentsDir).filter((file) => {
    try {
      const filePath = path.join(componentsDir, file);
      return fs.statSync(filePath).isDirectory(); // 检查是否是文件夹
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`⚠️ 警告：组件目录不存在或无法访问：${file}`);
        return false; // 忽略出错的路径
      }
      console.error(`❌ 错误：无法处理组件目录 ${file} - ${err.message}`);
      return false;
    }
  });

  // 生成路由配置
  const routes = componentFiles
    .map((dir) => {
      const demoDir = path.join(componentsDir, dir, 'demo');
      if (fs.existsSync(demoDir)) {
        return `{
          path: '/${dir}',
          name: '${toCamelCase(dir)}',
          component: () => import('@/components/${dir}/demo/index.vue'),
        }`;
      }
      return ''; // 不包含 demo 文件夹的组件忽略
    })
    .filter(Boolean)
    .join(',\n');

  const routerContent = `
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/${componentFiles[0]}' },
    ${routes}
  ]
});

export default router;
`;

  // 写入路由文件
  const routerFile = path.resolve(componentsDir, '../router/index.ts');
  fs.writeFileSync(routerFile, routerContent.trim());
  console.log('✅ router/index.ts has been updated successfully.');
}
