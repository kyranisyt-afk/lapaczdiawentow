const CACHE_NAME = 'diamenty-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'koszyk.png',
  'zloty_koszyk.png',
  'diament.png',
  'bomba.png',
  'grzyb.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});