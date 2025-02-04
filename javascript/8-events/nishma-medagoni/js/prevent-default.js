const form = document.getElementById("myForm")
const errorMessage = document.getElementById("error-message")

form.addEventListener("submit", function (event) {
  // Clear previous error message
  errorMessage.textContent = ""

  // Check if username and email are valid
  const username = document.getElementById("username").value
  const email = document.getElementById("email").value

  if (!username || !email) {
    // Prevent form submission if fields are invalid
    event.preventDefault()

    // Display error message
    errorMessage.textContent = "Both username and email are required!"
  }
})
