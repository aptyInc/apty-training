const login = document.getElementById("login-script");

const bodyImage = document.createElement('img');
bodyImage.src = "https://www.apty.io/wp-content/uploads/2024/06/logo.svg"; 
bodyImage.alt = 'Login Image';
bodyImage.style.display = 'block';
bodyImage.style.margin = '0 auto';
bodyImage.style.width = '150px'; 
bodyImage.style.height = 'auto';
login.prepend(bodyImage);

const heading = document.createElement("h1");
heading.textContent = "Login";
login.appendChild(heading);

const form = document.createElement("form");
form.id = 'loginForm';

//username
const usernameGroup = document.createElement("div");
usernameGroup.className = 'form-group';

const label = document.createElement("label");
label.setAttribute("for", "email-id");
label.textContent = "Email-id :"
label.className = "email-id";
usernameGroup.appendChild(label);

const mail = document.createElement("input");
mail.type="text";
mail.id="email-id"
mail.name="email-id";
mail.required="true"
usernameGroup.appendChild(mail);
//error
const usernameError = document.createElement("div");
usernameError.style.color = "red";
usernameError.style.fontSize = "12px";
usernameGroup.appendChild(usernameError);

form.appendChild(usernameGroup);

//pasword
const passwordGroup = document.createElement("div");
passwordGroup.className = "form-group";

const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password :";
passwordGroup.appendChild(passwordLabel);

const password = document.createElement("input");
password.type = "password";
password.id = "password";
password.name = "password";
password.required = true;
passwordGroup.appendChild(password);

const passwordError = document.createElement("div");
passwordError.style.color = "red";
passwordError.style.fontSize = "12px";
passwordGroup.appendChild(passwordError);

form.appendChild(passwordGroup);

//submit
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.className = "btn";
submitButton.textContent = "Login";
form.appendChild(submitButton);

const errorDiv = document.createElement("div");
errorDiv.id = "error";
errorDiv.className = "error";
form.appendChild(errorDiv);

login.appendChild(form);

// Create register link
const registerLink = document.createElement("div");
registerLink.className = "register-link";
registerLink.innerHTML = "Not registered yet? <a href='#'> Register here </a>";
login.appendChild(registerLink);

// Add event listener for form submission
const validUsername = "admin";
const validPassword = "Password123";


form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = mail.value;
    const passwordValue = password.value;

    let isValid = true;

    // Validate username
    if (username.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters long";
        isValid = false;
    }
    // Validate password
    if (passwordValue.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        isValid = false;
    } else if (!/[A-Z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter and one number';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        if (username === validUsername && passwordValue === validPassword) {
            form.action="https://www.apty.io/";
            form.method="GET";
            form.submit();

        } else {
            errorDiv.textContent = "Invalid username or password";
        }
    }
});