// Get the form element
const form = document.getElementById("waitlist-form");

function sendData() {
  const email = document.getElementById("email").value;

  if (!email) {
    return;
  }

  // make sure email is valid
  if (!email.includes("@")) {
    return;
  }

  fetch(`https://vividly-backend.herokuapp.com/v0/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  form.style.display = "none";
  const successMessage = document.getElementById("signup-success");
  successMessage.style.display = "block";
}

const button = document.getElementById("button");
button.onclick = sendData;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  sendData();
});
