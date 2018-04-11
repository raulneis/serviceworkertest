// Ofrecer actuailzacion de pagina
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes

workbox.setConfig({
  debug: true
});

workbox.skipWaiting();
workbox.clientsClaim();

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});


workbox.precaching.precacheAndRoute(self.__precacheManifest);

