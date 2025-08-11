const registrationForm = document.getElementById('registrationForm');
    const formFeedback = document.getElementById('formFeedback');

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Function to validate username
    function validateUsername() {
      const username = usernameInput.value.trim();
      if (username === '') {
        usernameError.textContent = 'Username is required.';
        return false;
      } else if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return false;
      } else {
        usernameError.textContent = '';
        return true;
      }
    }

    // Function to validate email
    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === '') {
        emailError.textContent = 'Email is required.';
        return false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }

    // Function to validate password
    function validatePassword() {
      const password = passwordInput.value.trim();
      if (password === '') {
        passwordError.textContent = 'Password is required.';
        return false;
      } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
    }

    // Function to validate confirm password
    function validateConfirmPassword() {
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
        return false;
      } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
      } else {
        confirmPasswordError.textContent = '';
        return true;
      }
    }

    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);

    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const isUsernameValid = validateUsername();
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();

      if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        formFeedback.innerHTML = '<p class="success">Registration successful!</p>';
      } else {
        formFeedback.innerHTML = '<p class="error">Please fix the errors above and try again.</p>';
      }
    });