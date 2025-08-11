

const validateUsername = (value) => value.length >= 3;
const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validatePassword = (value) => value.length >= 6;

const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

usernameInput.addEventListener('input', () => {
    if (!validateUsername(usernameInput.value)) {
        usernameError.textContent = 'Username must be at least 3 characters.';
    } else {
        usernameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters.';
    } else {
        passwordError.textContent = '';
    }
});


form.addEventListener('submit', (event) => {
    let isValid = true;

    if (!validateUsername(usernameInput.value)) {
        usernameError.textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
