// 用于在页面中动态加载 HTML 组件
async function loadComponent(targetSelector, filePath) {
  const container = document.querySelector(targetSelector);
  if (!container) return; // 若找不到目标容器则退出

  const res = await fetch(filePath); // 异步读取组件文件
  const html = await res.text();     // 转为字符串
  container.innerHTML = html;        // 填充到页面
}