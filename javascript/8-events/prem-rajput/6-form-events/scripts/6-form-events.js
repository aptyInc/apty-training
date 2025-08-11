const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

username.addEventListener("input", () => {
    if (username.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
    } else {
        usernameError.textContent = "";
    }
});

email.addEventListener("input", () => {
    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Enter a valid email address";
    } else {
        emailError.textContent = "";
    }
});

password.addEventListener("input", () => {
    if (password.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
    } else {
        passwordError.textContent = "";
    }
});