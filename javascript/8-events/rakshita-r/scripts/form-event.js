
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Function to validate the username
    usernameInput.addEventListener('input', function () {
      const usernameError = document.getElementById('usernameError');
      if (this.value.trim().length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        this.classList.add('error');
      } else {
        usernameError.textContent = '';
        this.classList.remove('error');
      }
    });

    // Function to validate the email
    emailInput.addEventListener('input', function () {
      const emailError = document.getElementById('emailError');
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(this.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        this.classList.add('error');
      } else {
        emailError.textContent = '';
        this.classList.remove('error');
      }
    });

    // Function to validate the password
    passwordInput.addEventListener('input', function () {
      const passwordError = document.getElementById('passwordError');
      if (this.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        this.classList.add('error');
      } else {
        passwordError.textContent = '';
        this.classList.remove('error');
      }
    });

    // Prevent form submission if there are validation errors
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Check if all fields are valid
      const usernameValid = usernameInput.value.trim().length >= 3;
      const emailValid = /^\S+@\S+\.\S+$/.test(emailInput.value.trim());
      const passwordValid = passwordInput.value.trim().length >= 6;

      if (usernameValid && emailValid && passwordValid) {
        alert('Registration successful!');
        // You can add your form submission logic here
      } else {
        alert('Please fix the errors before submitting.');
      }
    });
 