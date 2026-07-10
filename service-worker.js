const CACHE_NAME = 'pomodoro-cache-v6';
const ASSETS_TO_CACHE = [
  'home.html',
  'task-plan.html',
  'break-guide.html',
  'ai-chat.html',
  'dashboard.html',
  'settings.html',
  'index.html',
  'manifest.json',
  'assets/css/styles.css',
  'assets/js/common.js'
];

// 安装 Service Worker，缓存核心文件
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 网络优先策略（优先加载最新内容，离线时回退缓存）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 缓存成功获取的响应
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // 离线时从缓存读取
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // 如果请求的是 HTML 页面但缓存中没有，返回 home.html
          if (event.request.mode === 'navigate') {
            return caches.match('home.html');
          }
          return new Response('离线模式', { status: 200 });
        });
      })
  );
});