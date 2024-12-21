
const form = document.getElementById('form');
const name = document.getElementById('name');
const nameError = document.getElementById('namError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener('submit', function (evt) {

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';

    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.'
        isValid = false
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;

    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    if (!isValid)
        evt.preventDefault();
    else
        alert("Form submitted successfully!")



});

