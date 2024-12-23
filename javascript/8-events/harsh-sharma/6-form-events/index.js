// Get form elements
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
  } else {
    passwordError.textContent = '';
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmPasswordError.textContent = '';
  }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

const form = document.getElementById('passwordForm');
form.addEventListener('submit', function(event) {
  validatePassword();
  validateConfirmPassword();

  if (
    passwordError.textContent ||
    confirmPasswordError.textContent
  ) {
    event.preventDefault(); // Prevent form submission
    alert('Please fix the errors before submitting.');
  }
});
