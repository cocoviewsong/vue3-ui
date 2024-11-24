import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import toCamelCase from './utils/to-came-case.js';
import { generateRouterFile } from './generate-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, '../src/components'); // 组件目录路径
const outputFile = path.resolve(__dirname, '../src/index.ts'); // 输出的文件路径

function updateIndexFile() {
  let componentFiles = [];
  try {
    // 读取组件目录
    componentFiles = fs.readdirSync(componentsDir).filter((file) => {
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
  } catch (err) {
    console.error(`❌ 错误：无法读取组件目录 - ${err.message}`);
    return; // 中断更新流程，但不中止脚本
  }

  // 构造导入和安装代码
  try {
    const imports = componentFiles
      .map(
        (dir) =>
          `import Co${toCamelCase(
            dir
          )} from '@/components/${dir}/Co${toCamelCase(dir)}.vue';`
      )
      .join('\n');
    const installComponents = componentFiles
      .map((component) => {
        const componentName = `Co${toCamelCase(component)}`;
        return `app.component('${componentName}', ${componentName});`;
      })
      .join('\n');

    // 生成最终内容
    const outputContent = `
import type { App } from 'vue';
${imports}
import { ThemeManager } from '@/utils/theme';
import '@/assets/css/index.css';

export { ${componentFiles.map((c) => `Co${toCamelCase(c)}`).join(', ')}, };

export default {
  install(app: App) {
    ${installComponents}
    ThemeManager;
  },
};
`;

    // 写入文件
    fs.writeFileSync(outputFile, outputContent.trim());
    console.log('✅ index.ts has been updated successfully.');

    // 更新路由文件
    generateRouterFile(componentsDir);
  } catch (err) {
    console.error(`❌ 错误：生成或写入 index.ts 时发生问题 - ${err.message}`);
  }
}

// 初始更新
try {
  updateIndexFile();
} catch (err) {
  console.error(`❌ 未处理的错误：${err.message}`);
}

// 文件监听：当 `components` 目录发生变化时，重新执行更新
try {
  fs.watch(componentsDir, { recursive: true }, (eventType, filename) => {
    if (filename && (eventType === 'rename' || filename.endsWith('.vue'))) {
      try {
        updateIndexFile();
      } catch (err) {
        console.error(`❌ 错误：文件更新监听器中发生问题 - ${err.message}`);
      }
    }
  });
} catch (err) {
  console.error(`❌ 错误：无法监听组件目录 - ${err.message}`);
}
