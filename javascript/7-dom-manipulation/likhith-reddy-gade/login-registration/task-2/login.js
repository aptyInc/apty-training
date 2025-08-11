const formContainer = document.getElementById("form-container");

const form = document.createElement("form");
form.setAttribute("id", "loginForm");

// Email Label
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
emailLabel.setAttribute("for", "email");

// Email Input
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Enter your Email");
emailInput.setAttribute("required", true);

// Password Label
const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
passwordLabel.setAttribute("for", "password");

// Password Input
const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("placeholder", "Enter your password");
passwordInput.setAttribute("required", true);

// Submit Button
const submitButton = document.createElement("button");
submitButton.textContent = "Login";
submitButton.setAttribute("type", "submit");

// Appending elements to the form
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);

// Appending the form to the container
formContainer.appendChild(form);

// Form Submit Event Listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let errors = "";

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors += "Please enter a valid email address.\n";
  }

  // Validate Password
  if (password.length < 6) {
    errors += "Password must be at least 6 characters long.\n";
  }

  if (errors) {
    alert(`Validation Errors:\n${errors}`);
  } else {
    alert("Login successful!");
    console.log({ email });
  }
});
