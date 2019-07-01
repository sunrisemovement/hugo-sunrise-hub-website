const CACHE_NAME = 'sunrise-hub-website-v1'

const cacheForeverAfterFirstLoad = async (event: FetchEvent): Promise<void> => {
  event.respondWith((async () => {
    const request = event.request
    const cache = await caches.open(CACHE_NAME)
    const matching = await cache.match(request)
    if (!matching) {
      const response = await fetch(request)
      await cache.put(request, response.clone())
      return response
    } else {
      return matching
    }
  })())
}

const shouldCacheForeverAfterFirstLoad = (event: FetchEvent): boolean => {
  return false
  //   || (event.request.url.endsWith('.js') && event.request.method === 'GET')
  //   || (event.request.url.endsWith('.css') && event.request.method === 'GET')
    || (event.request.url.startsWith('https://maps.wikimedia.org') && event.request.method === 'GET')
}

const alwaysFetch = (event: FetchEvent) => {
  event.respondWith(fetch(event.request))
}

self.addEventListener('install', (event_: Event) => {
  const event = event_ as ExtendableEvent
  const worker = (self as unknown) as ServiceWorkerGlobalScope
  event.waitUntil(worker.skipWaiting())
})

self.addEventListener('activate', (event_: Event) => {
  const event = event_ as ExtendableEvent
  const worker = (self as unknown) as ServiceWorkerGlobalScope
  event.waitUntil(worker.clients.claim())
})

self.addEventListener('fetch', (event: Event) => {
  const fetchEvent = event as FetchEvent
  if (shouldCacheForeverAfterFirstLoad(fetchEvent)) cacheForeverAfterFirstLoad(fetchEvent)
  else alwaysFetch(fetchEvent)
})