const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
    let isValid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';

    // Validate username
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }

    // Validate email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    //password
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }


    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});