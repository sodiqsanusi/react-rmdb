/* eslint-disable no-restricted-globals */
const staticCacheName = 'Static-Cache?v1';
const dynamicCacheName = 'Dynamic-Cache?v2';
const urlsToCache = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css?family=Abel',
  'https://fonts.gstatic.com/s/abel/v12/MwQ5bhbm2POE2V9BPbh5uGM.woff2',
  '/404',
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/main.chunk.js'
]


self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then(openedCache => {
      openedCache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    
  )
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(cacheResponse => {
      return cacheResponse || fetch(evt.request)
    })
  )
})