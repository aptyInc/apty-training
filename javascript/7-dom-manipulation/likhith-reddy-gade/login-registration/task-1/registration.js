const formContainer = document.getElementById("form-container");

const form = document.createElement("form");
form.setAttribute("id", "registrationForm");

const nameLabel = document.createElement("label");
nameLabel.textContent = "Full Name:";
nameLabel.setAttribute("for", "fullName");

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "fullName");
nameInput.setAttribute("placeholder", "Enter your full name");
nameInput.setAttribute("required", true);

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
emailLabel.setAttribute("for", "email");

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Enter your Email");
emailInput.setAttribute("required", true);

const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
passwordLabel.setAttribute("for", "password");

const passwordInput = document.createElement("input");
passwordInput.setAttribute("required", true);
passwordInput.setAttribute("placeholder", "Enter password");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");

const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.textContent = "Confirm Password:";
confirmPasswordLabel.setAttribute("for", "confirmPassword");

const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.setAttribute("type", "password");
confirmPasswordInput.setAttribute("id", "confirmPassword");
confirmPasswordInput.setAttribute("placeholder", "Enter confirm password");
confirmPasswordInput.setAttribute("required", true);

const submitButton = document.createElement("button");
submitButton.textContent = "Register";
submitButton.setAttribute("type", "submit");

// Appending the elements to the form
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton); // Ensure the button is appended

// Appending the form to the form container
formContainer.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let errors = "";

  // Validate Full Name
  if (fullName.length < 3) {
    errors += "Full Name must be at least 3 characters long.\n";
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors += "Please enter a valid email address.\n";
  }

  // Validate Password
  if (password.length < 6) {
    errors += "Password must be at least 6 characters long.\n";
  }

  // Validate Password Confirmation
  if (password !== confirmPassword) {
    errors += "Passwords do not match.\n";
  }

  if (errors) {
    alert(`Validation Errors:\n${errors}`);
  } else {
    alert("Registration successful!");
    console.log({ fullName, email });
  }
});
