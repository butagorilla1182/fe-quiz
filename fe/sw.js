
const CACHE_NAME = "fe-quiz-v1";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./questions.js", "./manifest.json"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
