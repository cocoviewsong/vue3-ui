export default function toCamelCase(str) {
  return str
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) // 转换 `-` 后面的字母为大写
    .replace(/^([a-z])/g, (match) => match.toUpperCase()); // 首字母大写
}
