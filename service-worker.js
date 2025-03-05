self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open('pwa-cache').then((cache)=>{
            return caches.addAll([
                './',
                './index.html',
                './CSS/bookCreatorStyle.css',
                './CSS/style.css',
                './HTML/bookCreator.html',
                './JS/create.js',
                './JS/createFeats.js',
                './JS/createModifiers.js'
            ]);
        })
    );
});

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    )
});