const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('input', function() {
    const errorElement = document.getElementById('username-error');
    if (!errorElement) {
        const newError = document.createElement('span');
        newError.id = 'username-error';
        newError.classList.add('error');
        usernameInput.after(newError);
    }
    const errorText = usernameInput.value.length < 3 ? 'Username must be at least 3 characters long.' : '';
    document.getElementById('username-error').textContent = errorText;
});

emailInput.addEventListener('input', function() {
    const errorElement = document.getElementById('email-error');
    if (!errorElement) {
        const newError = document.createElement('span');
        newError.id = 'email-error';
        newError.classList.add('error');
        emailInput.after(newError);
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const errorText = !emailPattern.test(emailInput.value) ? 'Please enter a valid email address.' : '';
    document.getElementById('email-error').textContent = errorText;
});

passwordInput.addEventListener('input', function() {
    const errorElement = document.getElementById('password-error');
    if (!errorElement) {
        const newError = document.createElement('span');
        newError.id = 'password-error';
        newError.classList.add('error');
        passwordInput.after(newError);
    }
    const errorText = passwordInput.value.length < 6 ? 'Password must be at least 6 characters long.' : '';
    document.getElementById('password-error').textContent = errorText;
});
