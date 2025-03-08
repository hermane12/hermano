const CACHE_NAME = "hermane-dinero-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    "/hermano1.png",
    "/hermano2.png",
    "/logo.png",
    "/a propos.png",
    "/service.png",
    "/contact.jpg",
    "/astuces.jpg",
    "/avis client.jpg"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});