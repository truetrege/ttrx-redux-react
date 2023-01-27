'use strict';
// importScripts('sw-toolbox.js');
// toolbox.precache(["index.html",'/static/*']);
// toolbox.router.get('/static/*', toolbox.cacheFirst);
  
// toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5}); 


// var CACHE_VERSION = "v3";
// var CACHE_NAME = CACHE_VERSION + ":sw-cache-";
// var filesToCache = [
//   '/static/*'
// ];

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });
// self.addEventListener('activate', function(e) {
//   console.log('[ServiceWorker] Activate');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== CACHE_NAME) {
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   return self.clients.claim();
// });

importScripts('workbox-sw.js');

workbox.routing.registerRoute(
  // Match any URL that contains 'ytimg.com'.
  // Unlike in sw-toolbox, in Workbox, a RegExp that matches
  // a cross-origin URL needs to include the initial 'https://'
  // as part of the match.
  new RegExp('^/*'),

  // Apply a cache-first strategy to anything that matches.
  new workbox.strategies.CacheFirst({
    // Configuration options are passed in to the strategy.
    cacheName: 'ttrx-game-cashe-v12',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 30,
      }),
      // In Workbox, you must explicitly opt-in to caching
      // responses with a status of 0 when using the
      // cache-first strategy.
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Set a default network-first strategy to use when
// there is no explicit matching route:
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());