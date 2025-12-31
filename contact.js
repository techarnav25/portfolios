const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    return;
  }

  status.textContent = "Sending message...";

  emailjs.send(
    "service_x7k9abcarnavconnect",      // ← replace
    "template_v5ucnjk",     // ← replace
    "template_o20fsu5",     // ← replace
    {
      from_name: name,
      from_email: email,
      message: message,
    }
  ).then(
    () => {
      status.textContent = "Message sent successfully ✓";
      form.reset();
    },
    (error) => {
      status.textContent = "Failed to send message.";
      console.error(error);
    }
  );
});
