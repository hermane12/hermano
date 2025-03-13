const CACHE_NAME = "hermane-dinero-cache-v1";
const urlsToCache = [
  "a propos.png",
  "about.css",
  "about.html",
  "astuces.jpg",
  "avis client.jpg",
  "blog.css",
  "blog.html",
  "contact.css",
  "contact.html",
  "contact.jpg",
  "hermano1.png",
  "hermano2.png",
  "index.html",
  "styles.css",
  "installe.jpg",
  "manifest.json",
  "moii.jpg",
  "optimise.jpeg",
  "photo.jpg",
  "repare.jpg",
  "script.js",
  "securite.jpg",
  "service.png",
  "services.css",
  "services.html",
  "t1.jpg",
  "t2.jpg",
  "logo.png",
  "testimonials.css",
  "testimonials.html",
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
