// TorqSpec Pro v1.4.1 - Service Worker for offline functionality
const CACHE = "torqspec-v1.4.1";
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest"])));
  self.skipWaiting();
});
self.addEventListener("activate", e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{
      const copy = resp.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return resp;
    }).catch(()=>caches.match("./index.html")))
  );
});