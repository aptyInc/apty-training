const form = document.getElementById("registrationForm")
const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const usernameError = document.getElementById("username-error")
const emailError = document.getElementById("email-error")

// Function to validate username
function validateUsername() {
  const usernameValue = usernameInput.value.trim()
  if (usernameValue === "") {
    usernameError.textContent = "Username cannot be empty"
  } else {
    usernameError.textContent = ""
  }
}

// Function to validate email
function validateEmail() {
  const emailValue = emailInput.value.trim()
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address"
  } else {
    emailError.textContent = ""
  }
}

// Event listeners to validate inputs on user typing
usernameInput.addEventListener("input", validateUsername)
emailInput.addEventListener("input", validateEmail)

// Prevent form submission if there are validation errors
form.addEventListener("submit", function (event) {
  event.preventDefault()
  validateUsername()
  validateEmail()

  if (usernameError.textContent === "" && emailError.textContent === "") {
    alert("Form submitted successfully!")
    form.reset() // Reset the form after successful submission
  } else {
    alert("Please correct the errors before submitting.")
  }
})
