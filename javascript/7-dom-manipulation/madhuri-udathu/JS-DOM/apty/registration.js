const container = document.createElement('div');
container.id = 'registration-container';
document.body.appendChild(container);

// Create and append the heading
const heading = document.createElement('h1');
heading.textContent = 'Registration Page';
container.appendChild(heading);

// Create the registration form
const form = document.createElement('form');
form.id = 'registrationForm';
container.appendChild(form);

// Helper function to set attributes
function setAttributes(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Add text input for Full Name
const nameGroup = document.createElement('div');
nameGroup.className = 'form-group';
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Full Name:';
nameLabel.setAttribute('for', 'fullName');
nameGroup.appendChild(nameLabel);
const nameInput = document.createElement('input');
setAttributes(nameInput, { type: 'text', id: 'fullName', name: 'fullName', required: 'true' });
nameGroup.appendChild(nameInput);
const nameError = document.createElement('div');
nameError.className = 'error';
nameGroup.appendChild(nameError);
form.appendChild(nameGroup);

// Add email input
const emailGroup = document.createElement('div');
emailGroup.className = 'form-group';
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
emailLabel.setAttribute('for', 'email');
emailGroup.appendChild(emailLabel);
const emailInput = document.createElement('input');
setAttributes(emailInput, { type: 'email', id: 'email', name: 'email', required: 'true' });
emailGroup.appendChild(emailInput);
const emailError = document.createElement('div');
emailError.className = 'error';
emailGroup.appendChild(emailError);
form.appendChild(emailGroup);

// Add password input
const passwordGroup = document.createElement('div');
passwordGroup.className = 'form-group';
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
passwordLabel.setAttribute('for', 'password');
passwordGroup.appendChild(passwordLabel);
const passwordInput = document.createElement('input');
setAttributes(passwordInput, { type: 'password', id: 'password', name: 'password', required: 'true' });
passwordGroup.appendChild(passwordInput);
const passwordError = document.createElement('div');
passwordError.className = 'error';
passwordGroup.appendChild(passwordError);
form.appendChild(passwordGroup);

// Add gender radio buttons
const genderGroup = document.createElement('div');
genderGroup.className = 'form-group';
const genderLabel = document.createElement('label');
genderLabel.textContent = 'Gender:';
genderGroup.appendChild(genderLabel);
const genders = ['Male', 'Female', 'Other'];
genders.forEach(gender => {
    const genderInput = document.createElement('input');
    setAttributes(genderInput, { type: 'radio', name: 'gender', value: gender });
    genderGroup.appendChild(genderInput);
    const genderText = document.createTextNode(gender);
    genderGroup.appendChild(genderText);
});
const genderError = document.createElement('div');
genderError.className = 'error';
genderGroup.appendChild(genderError);
form.appendChild(genderGroup);

// Add date of birth input
const dobGroup = document.createElement('div');
dobGroup.className = 'form-group';
const dobLabel = document.createElement('label');
dobLabel.textContent = 'Date of Birth:';
dobLabel.setAttribute('for', 'dob');
dobGroup.appendChild(dobLabel);
const dobInput = document.createElement('input');
setAttributes(dobInput, { type: 'date', id: 'dob', name: 'dob', required: 'true' });
dobGroup.appendChild(dobInput);
form.appendChild(dobGroup);

// Add file upload
const fileGroup = document.createElement('div');
fileGroup.className = 'form-group';
const fileLabel = document.createElement('label');
fileLabel.textContent = 'Upload File:';
fileLabel.setAttribute('for', 'fileUpload');
fileGroup.appendChild(fileLabel);
const fileInput = document.createElement('input');
setAttributes(fileInput, { type: 'file', id: 'fileUpload', name: 'fileUpload' });
fileGroup.appendChild(fileInput);
form.appendChild(fileGroup);

// Add terms and conditions checkbox
const termsGroup = document.createElement('div');
termsGroup.className = 'form-group';
const termsInput = document.createElement('input');
setAttributes(termsInput, { type: 'checkbox', id: 'terms', name: 'terms', required: 'true' });
termsGroup.appendChild(termsInput);
const termsLabel = document.createElement('label');
termsLabel.textContent = ' I agree to the terms and conditions';
termsLabel.setAttribute('for', 'terms');
termsGroup.appendChild(termsLabel);
const termsError = document.createElement('div');
termsError.className = 'error';
termsGroup.appendChild(termsError);
form.appendChild(termsGroup);

// Add submit button
const submitButton = document.createElement('button');
submitButton.className = 'btn';
submitButton.type = 'submit';
submitButton.textContent = 'Register';
form.appendChild(submitButton);

// Add redirect to login link
const loginLinkDiv = document.createElement('div');
loginLinkDiv.className = 'register-link';
loginLinkDiv.innerHTML = 'Already registered? <a href="#" id="loginLink">Login here</a>';
container.appendChild(loginLinkDiv);

// Form validation and error handling
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    genderError.textContent = '';
    termsError.textContent = '';

    let isValid = true;

    // Validate full name
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        isValid = false;
    }


    // Validate password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Validate gender
    const selectedGender = form.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderError.textContent = 'Please select your gender.';
        isValid = false;
    }

    // Validate terms and conditions
    if (!termsInput.checked) {
        termsError.textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    // If the form is valid, redirect to login
    if (isValid) {
        alert('Registration successful! Redirecting to login...');
        // Simulating redirection to login
        document.body.innerHTML = '<h1>Login Page</h1>';
    }
});

// Redirect to login page when login link is clicked
const loginLink = document.getElementById('loginLink');
const forms = document.getElementById('registrationForm');
loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Redirecting to login...');
    forms.method="GET";
    forms.action="./login-page.html";
    forms.submit();
});