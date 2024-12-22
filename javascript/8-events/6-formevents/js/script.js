const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


nameField.addEventListener('input', validateName);
emailField.addEventListener('input', validateEmail);
passwordField.addEventListener('input', validatePassword);

function validateName() {
    const name = nameField.value.trim();
    if (name === "") {
        nameError.textContent = "Name is required.";
    } else {
        nameError.textContent = "";
    }
}

function validateEmail() {
    const email = emailField.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
    } else {
        emailError.textContent = "";
    }
}

function validatePassword() {
    const password = passwordField.value.trim();
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
    } else {
        passwordError.textContent = "";
    }
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    validateName();
    validateEmail();
    validatePassword();
    if (nameError.textContent || emailError.textContent || passwordError.textContent) {
        event.preventDefault();
    }
});