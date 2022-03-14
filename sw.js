importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('hiddenCaeser').then(function(cache) {
     return cache.addAll([
    
       '/hiddenCaeser.html',
       '/css/caeser.css',
       '/js/caeser.js',
       '/images/logo.png'
     ]);
   })
 );
});
