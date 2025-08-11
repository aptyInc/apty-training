document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  // Username Validation
  usernameInput.addEventListener("input", () => {
    if (usernameInput.value.length < 3) {
      usernameError.textContent =
        "Username must be at least 3 characters long.";
    } else {
      usernameError.textContent = "";
    }
  });

  // Email Validation
  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  });

  // Password Validation
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 6) {
      passwordError.textContent =
        "Password must be at least 6 characters long.";
    } else {
      passwordError.textContent = "";
    }
  });

  // Prevent form submission if there are errors
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", (event) => {
    if (
      usernameError.textContent ||
      emailError.textContent ||
      passwordError.textContent ||
      !usernameInput.value ||
      !emailInput.value ||
      !passwordInput.value
    ) {
      event.preventDefault();
      alert("Please fix the errors before submitting the form.");
    }
  });
});
