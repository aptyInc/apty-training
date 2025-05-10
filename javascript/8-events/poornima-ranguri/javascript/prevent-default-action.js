document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.textContent = ""));

    let isValid = true;

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username === "") {
      document.getElementById("usernameError").textContent =
        "Username is required";
      isValid = false;
    } else if (username.length < 3) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 3 characters";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById("emailError").textContent = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      document.getElementById("passwordError").textContent =
        "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters";
      isValid = false;
    }

    if (isValid) {
      console.log("Form is valid, submitting...");

      alert("Form submitted successfully!");
    }
  });
