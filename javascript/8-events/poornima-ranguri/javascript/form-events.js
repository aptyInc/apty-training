let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

username.addEventListener("keydown", () => {
  if (username.value.length < 5) {
    console.log("username must be atleast 6 character");
    document.getElementById("usernameError").textContent =
      "username must be atleast 6 characters!";
  } else {
    document.getElementById("usernameError").textContent = "";
  }
});

email.addEventListener("keydown", (event) => {
  if (email.checkValidity()) {
    document.getElementById("emailError").textContent = "";
  } else {
    document.getElementById("emailError").textContent = "Enter Valid Email";
  }
});

password.addEventListener("keydown", (event) => {
  if (password.value < 3) {
    document.getElementById("passwordError").textContent =
      "Password should have atleast 6 characters";
  } else {
    document.getElementById("passwordError").textContent = "";
  }
});
