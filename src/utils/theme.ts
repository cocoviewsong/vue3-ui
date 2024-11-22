import type { ThemeType } from './theme.d';

let currentTheme: ThemeType = 'light';

export const ThemeManager = {
  // 获取当前主题
  getTheme(): ThemeType {
    return currentTheme;
  },

  // 设置主题
  setTheme(theme: ThemeType) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },

  // 初始化主题，供用户使用
  init(theme?: ThemeType) {
    if (theme) return this.setTheme(theme);

    const currentUserTheme = localStorage.getItem('theme') as
      | ThemeType
      | 'null';

    currentUserTheme === 'null'
      ? this.setTheme('light')
      : this.setTheme(currentUserTheme);
  },
};
