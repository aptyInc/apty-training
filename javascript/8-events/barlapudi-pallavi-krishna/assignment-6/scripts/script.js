const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const form = document.getElementById('regForm');
username.addEventListener('input', () => {
  if (username.value.trim().length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters';
  } else {
    usernameError.textContent = '';
  }
});
email.addEventListener('input', () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value.trim())) {
    emailError.textContent = 'Enter a valid email';
  } else {
    emailError.textContent = '';
  }
});
password.addEventListener('input', () => {
  if (password.value.trim().length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
  } else {
    passwordError.textContent = '';
  }
});
form.addEventListener('submit', (e) => {
  if (usernameError.textContent || emailError.textContent || passwordError.textContent) {
    e.preventDefault();
  }
});