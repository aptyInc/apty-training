const regForm = document.getElementById('regForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

username.addEventListener('input', function() {
    if (username.value.trim().length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
    } else {
        usernameError.textContent = '';
    }
});

email.addEventListener('input', function() {
    if (!email.value.includes('@')) {
        emailError.textContent = 'Invalid email';
    } else {
        emailError.textContent = '';
    }
});

password.addEventListener('input', function() {
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});

regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value && email.value && password.value && !usernameError.textContent && !emailError.textContent && !passwordError.textContent) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fix errors before submitting');
    }
});
