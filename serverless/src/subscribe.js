/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

async function addContactToSendGrid(request_url) {
  const { searchParams } = new URL(request_url);
  const email = decodeUIRComponent(searchParams.get("email"));
  console.log(email);
  const apiKey = SENDGRID_API_KEY;
  const url = "https://api.sendgrid.com/v3/marketing/contacts";
  const data = {
    contacts: [{ email: email }],
  };
  console.log(url, apiKey, data);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  return response;
  return new Response("ok", {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
};
async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  if (request.method === "GET") {
    return addContactToSendGrid(request.url);
  }
}
addEventListener("fetch", (event) => {
  event.respondWith(handler(event.request));
});
