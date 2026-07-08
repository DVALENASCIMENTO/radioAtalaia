// service-worker.js

const CACHE_NAME = "radio-atalaia-v1";

const urlsToCache = [

  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./manifest.json",
  "./assets/logo.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png"

];

self.addEventListener("install",(event)=>{

  event.waitUntil(

    caches.open(CACHE_NAME)

    .then((cache)=>{

      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener("fetch",(event)=>{

  event.respondWith(

    caches.match(event.request)

    .then((response)=>{

      return response || fetch(event.request);
    })
  );
});