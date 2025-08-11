document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  form.addEventListener("submit", (event) => {
    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});
