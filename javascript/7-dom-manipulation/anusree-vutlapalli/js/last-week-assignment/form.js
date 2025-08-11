// Root element for the registration form
const div1 = document.createElement('div');
document.body.appendChild(div1);

// Registration Form Header
const h1 = document.createElement('h1');
h1.textContent = "Registration Form";
div1.appendChild(h1);

// Registration Form Element
const form = document.createElement('form');
form.id = "registrationForm";
form.style.width = "50%";
form.style.border = "1px solid #ccc";
form.style.padding = "15px";
form.style.borderRadius = "8px";
div1.appendChild(form);

// First Name Field
const namelabel = document.createElement('label');
namelabel.textContent = "First Name: ";
form.appendChild(namelabel);

const firstNameInput = document.createElement('input');
firstNameInput.type = "text";
firstNameInput.id = "firstName";
firstNameInput.style.width = "50%";
firstNameInput.style.margin = "10px 0";
firstNameInput.style.padding = "8px";
firstNameInput.style.border = "1px solid #ccc";
firstNameInput.style.borderRadius = "4px";
form.appendChild(firstNameInput);

form.appendChild(document.createElement('br'));

// Last Name Field
const lastNameLabel = document.createElement('label');
lastNameLabel.textContent = "Last Name: ";
form.appendChild(lastNameLabel);

const lastNameInput = document.createElement('input');
lastNameInput.type = "text";
lastNameInput.id = "lastName";
lastNameInput.style.width = "50%";
lastNameInput.style.margin = "10px 0";
lastNameInput.style.padding = "8px";
lastNameInput.style.border = "1px solid #ccc";
lastNameInput.style.borderRadius = "4px";
form.appendChild(lastNameInput);

form.appendChild(document.createElement('br'));

// Email Field
const emaillabel = document.createElement('label');
emaillabel.textContent = "Email: ";
form.appendChild(emaillabel);

const emailInput = document.createElement('input');
emailInput.type = "email";
emailInput.id = "email";
emailInput.style.width = "50%";
emailInput.style.margin = "10px 0";
emailInput.style.padding = "8px";
emailInput.style.border = "1px solid #ccc";
emailInput.style.borderRadius = "4px";
form.appendChild(emailInput);

form.appendChild(document.createElement('br'));

// Phone Number Field
const phoneLabel = document.createElement('label');
phoneLabel.textContent = "Phone Number: ";
form.appendChild(phoneLabel);

const phoneInput = document.createElement('input');
phoneInput.type = "tel";
phoneInput.id = "phone";
phoneInput.style.width = "50%";
phoneInput.style.margin = "10px 0";
phoneInput.style.padding = "8px";
phoneInput.style.border = "1px solid #ccc";
phoneInput.style.borderRadius = "4px";
form.appendChild(phoneInput);

form.appendChild(document.createElement('br'));

// Password Field
const passLabel = document.createElement('label');
passLabel.textContent = "Password: ";
form.appendChild(passLabel);

const passwordInput = document.createElement('input');
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.style.width = "50%";
passwordInput.style.margin = "10px 0";
passwordInput.style.padding = "8px";
passwordInput.style.border = "1px solid #ccc";
passwordInput.style.borderRadius = "4px";
form.appendChild(passwordInput);

form.appendChild(document.createElement('br'));

// Confirm Password Field
const conpassLabel = document.createElement('label');
conpassLabel.textContent = "Confirm Password: ";
form.appendChild(conpassLabel);

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = "password";
confirmPasswordInput.id = "confirmPassword";
confirmPasswordInput.style.width = "50%";
confirmPasswordInput.style.margin = "10px 0";
confirmPasswordInput.style.padding = "8px";
confirmPasswordInput.style.border = "1px solid #ccc";
confirmPasswordInput.style.borderRadius = "4px";
form.appendChild(confirmPasswordInput);

form.appendChild(document.createElement('br'));

// Submit Button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = "Register";
submitButton.style.color = "white";
submitButton.style.padding = "10px";
submitButton.style.width = "30%";
submitButton.style.backgroundColor = "#4CAF50";
submitButton.style.border = "none";
submitButton.style.borderRadius = "4px";
submitButton.style.cursor = "pointer";
form.appendChild(submitButton);

// Error and Success Message Elements
const errorMessage = document.createElement('div');
errorMessage.style.color = "red";
errorMessage.style.marginTop = "10px";
div1.appendChild(errorMessage);

const successMessage = document.createElement('div');
successMessage.style.color = "green";
successMessage.style.marginTop = "10px";
div1.appendChild(successMessage);

// Registration Form Submit Handler
form.addEventListener('submit', (event) => {
    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    let errors = [];

    if (!firstNameValue || firstNameValue.length < 3) {
        errors.push("First Name must be at least 3 characters long.");
    }

    if (!lastNameValue || lastNameValue.length < 3) {
        errors.push("Last Name must be at least 3 characters long.");
    }

    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(emailValue)) {
        errors.push("Please enter a valid email address.");
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneValue)) {
        errors.push("Please enter a valid 10-digit phone number.");
    }

    if (passwordValue.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    if (passwordValue !== confirmPasswordValue) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        errorMessage.textContent = errors.join(" ");
    } else {
        successMessage.textContent = "Registration successful!";
        successMessage.style.fontWeight = "bold";
        successMessage.style.fontSize = "16px";

        console.log("First Name:", firstNameValue);
        console.log("Last Name:", lastNameValue);
        console.log("Email:", emailValue);
        console.log("Phone:", phoneValue);

        div1.innerHTML = ""; // Clear the registration form
        showLoginForm(); // Show the login form
    }
});

// Function to Display Login Form
function showLoginForm() {
    const rootelement = document.createElement('div');
    document.body.appendChild(rootelement);

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to My Dynamic Page";
    rootelement.appendChild(h1);

    const form = document.createElement('form');
    form.id = "myForm";
    form.style.width = "50%";
    form.style.border = "1px solid #ccc";
    form.style.padding = "15px";
    form.style.borderRadius = "8px";
    rootelement.appendChild(form);

    const heading = document.createElement('h2');
    heading.textContent = "User Login Form";
    form.appendChild(heading);

    const namelabel = document.createElement('label');
    namelabel.textContent = "Name: ";
    namelabel.setAttribute('for', 'name');
    form.appendChild(namelabel);

    const input = document.createElement('input');
    input.type = "text";
    input.id = "name";
    input.style.width = "50%";
    input.style.margin = "10px 0";
    input.style.padding = "8px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";
    form.appendChild(input);

    form.appendChild(document.createElement('br'));

    const emaillabel = document.createElement('label');
    emaillabel.textContent = "Email: ";
    emaillabel.setAttribute('for', 'email');
    form.appendChild(emaillabel);

    const emailinput = document.createElement('input');
    emailinput.type = "email";
    emailinput.id = "email";
    emailinput.style.width = "50%";
    emailinput.style.margin = "10px 0";
    emailinput.style.padding = "8px";
    emailinput.style.border = "1px solid #ccc";
    emailinput.style.borderRadius = "4px";
    form.appendChild(emailinput);

    form.appendChild(document.createElement('br'));

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('formtarget', '_blank');
    button.textContent = "Login";
    button.style.color = "white";
    button.style.margin = "10px 0";
    button.style.padding = "10px";
    button.style.width = "30%";
    button.style.backgroundColor = "#4CAF50";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
    form.appendChild(button);
}
