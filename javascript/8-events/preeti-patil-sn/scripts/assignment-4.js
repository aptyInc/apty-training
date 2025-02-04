// Reference to the form
const form = document.getElementById("myForm");

// Add submit event listener
form.addEventListener("submit", (event) => {
  // References to the input fields
  const username = document.getElementById("username");
  const email = document.getElementById("email");

  // Check if fields are valid
  if (!username.value.trim() || !email.value.trim()) {
    // Prevent the default submission behavior
    event.preventDefault();

    // Alert or log an error message
    alert("Please fill out all required fields.");
  } else {
    alert("Form submitted successfully!");
  }
});
