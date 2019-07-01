if (navigator.serviceWorker) {
  navigator.serviceWorker.register(window._data.serviceWorkerUrl, { scope: '/' })
}