export function onRequest(context) {
  console.log(import.meta.env.SENDGRID_API_KEY);

  document
    .getElementById("subscribe-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;

      if (email) {
        try {
          const response = await addContactToSendGrid(email);

          if (response.status === 202) {
            alert("Successfully subscribed!");
          } else {
            alert("Failed to subscribe. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        }
      }
    });

  async function addContactToSendGrid(email) {
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    const url = "https://api.sendgrid.com/v3/marketing/contacts";

    console.log(url, apiKey);
    const data = {
      contacts: [{ email: email }],
    };

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    return response;
  }

  return new Response("Hello, world!");
}
