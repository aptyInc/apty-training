// Get form elements
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Get error message spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Username validation function
username.addEventListener("input", () => {
  if (username.value.length < 3) {
    usernameError.style.display = "inline";
  } else {
    usernameError.style.display = "none";
  }
});

// Email validation function
email.addEventListener("input", () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    emailError.style.display = "inline";
  } else {
    emailError.style.display = "none";
  }
});

// Password validation function
password.addEventListener("input", () => {
  if (password.value.length < 6) {
    passwordError.style.display = "inline";
  } else {
    passwordError.style.display = "none";
  }
});

// Prevent form submission if any input is invalid
form.addEventListener("submit", (e) => {
  if (
    username.value.length < 3 ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value) ||
    password.value.length < 6
  ) {
    e.preventDefault();
    alert("Please fix the errors before submitting the form.");
  }
});
