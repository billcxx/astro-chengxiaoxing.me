addEventListener("fetch", (event) => {
  event.respondWith(helloWorld(event.request));
});

async function helloWorld(request) {
  return new Response("hello world");
}
