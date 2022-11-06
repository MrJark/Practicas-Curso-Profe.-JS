
const VERSION = "v1";

self.addEventListener('install', event => { // el self es como el this pero especéfico para estos service workers
    event.waitUntil(precache());//esto lo que hace es esperar que la promesa se resuelva o rechace
});

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== 'GET') {
        return;
    }
    //buscar en el cache
    event.respondWith(cacheResponse(request));

    //a continuación vamos a escribir el códogo para actualizar el caché y que los U no se queden con una copia vieja y siempre esté actualizada
    event.waitUntil(updateCache(request));
})

async function precache(){
    const cache = await caches.open(VERSION)
    cache.addAll( [
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cacheResponse (request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request); //esta parte nos dice que nos va a responder con el response pero puede no encontrar nada y si es así, nos responderá con lo que haya de internet en vez de con el caché
}
async function updateCache (request) { 
    const cache = await caches.open(VERSION);
    const response = await fetch (request);
    return cache.put(request, response);
 }