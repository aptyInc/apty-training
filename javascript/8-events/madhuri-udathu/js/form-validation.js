const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Username Validation
usernameInput.addEventListener('input', function () {
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        usernameInput.classList.add('input-error');
    } else {
        usernameError.textContent = '';
        usernameInput.classList.remove('input-error');
    }
});

// Email Validation
emailInput.addEventListener('input', function () {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('input-error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    }
});

// Password Validation
passwordInput.addEventListener('input', function () {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordInput.classList.add('input-error');
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    }
});

// Confirm Password Validation
confirmPasswordInput.addEventListener('input', function () {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.classList.add('input-error');
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordInput.classList.remove('input-error');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission if validation fails
    let isValid = true;

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        usernameInput.classList.add('input-error');
        isValid = false;
    }
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('input-error');
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordInput.classList.add('input-error');
        isValid = false;
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.classList.add('input-error');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});