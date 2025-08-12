const emailInput = document.getElementById("email");
const form = document.getElementById("registrationForm");

emailInput.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
});

form.addEventListener("submit", (e) => {
  if (emailInput.classList.contains("invalid")) {
    e.preventDefault();
    alert("Please enter a valid email.");
  }
});
