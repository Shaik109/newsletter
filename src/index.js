document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("email");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      messageDiv.textContent = "Thank you for subscribing!";
      messageDiv.classList.remove("text-red-500");
      messageDiv.classList.add("text-green-500");
      emailInput.value = "";
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.classList.remove("text-green-500");
      messageDiv.classList.add("text-red-500");
    }
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
