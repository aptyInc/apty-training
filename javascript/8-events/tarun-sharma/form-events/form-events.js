document.getElementById('username').addEventListener('input', function () {
    const error = document.getElementById('usernameError');
    if (this.value.length < 3) {
      error.textContent = 'Username must be at least 3 characters';
    } else {
      error.textContent = '';
    }
  });

  document.getElementById('email').addEventListener('input', function () {
    const error = document.getElementById('emailError');
    if (!this.value.includes('@')) {
      error.textContent = 'Enter a valid email';
    } else {
      error.textContent = '';
    }
  });