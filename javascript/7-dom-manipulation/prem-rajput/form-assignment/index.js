// Login Page
let greeting = document.createElement("h1");
greeting.innerHTML = "WELCOME TO <span class='apty'>apty </span>!";
greeting.className = "greeting1";

let userName = document.createElement("input");
userName.type = "email";
userName.className = "input";
userName.setAttribute("placeholder", "Enter your mail");
userName.required = true;

let password = document.createElement("input");
password.type = "password";
password.className = "input";
password.setAttribute("placeholder", "Enter your password");
password.required = true;

let signIn = document.createElement("button");
signIn.className = "sign-in-button";
signIn.innerText = "Sign In";

signIn.addEventListener("click", () => {
    alert("User not found!");
});

let registerLink = document.createElement("a");
registerLink.href = "#";
registerLink.innerText = "Don't have an account? Register Now.";
registerLink.style.display = "block";
registerLink.style.marginTop = "15px";
registerLink.style.color = "rgb(0, 119, 255)";
registerLink.style.textDecoration = "none";
registerLink.style.fontSize = "1rem";

document.body.append(greeting);
document.body.append(userName);
document.body.append(password);
document.body.append(signIn);
document.body.append(registerLink);

registerLink.addEventListener("click", (e) => {
    e.preventDefault();

    greeting.style.display = "none";
    userName.style.display = "none";
    password.style.display = "none";
    signIn.style.display = "none";
    registerLink.style.display = "none";

    // Registration Page

    let registrationGreeting = document.createElement("h1");
    registrationGreeting.innerHTML =
        "REGISTER FOR <span class='apty'>apty </span>!";
    registrationGreeting.className = "greeting1";

    let form = document.createElement("form");
    form.className = "registration-form";

    let regName = document.createElement("input");
    regName.type = "text";
    regName.className = "input";
    regName.setAttribute("placeholder", "Enter your name");
    regName.required = true;

    let regEmail = document.createElement("input");
    regEmail.type = "email";
    regEmail.className = "input";
    regEmail.setAttribute("placeholder", "Enter your email");
    regEmail.required = true;

    let regMobileNo = document.createElement("input");
    regMobileNo.type = "tel";
    regMobileNo.className = "input";
    regMobileNo.setAttribute("placeholder", "Enter your mobile number");
    regMobileNo.setAttribute("maxlength", "10");
    regMobileNo.required = true;

    let regPassword = document.createElement("input");
    regPassword.type = "password";
    regPassword.className = "input";
    regPassword.setAttribute("placeholder", "Enter your password");
    regPassword.required = true;
    regPassword.minLength = 6;

    let genderLabel = document.createElement("label");
    genderLabel.innerText = "Gender:";

    let maleGender = document.createElement("input");
    maleGender.type = "radio";
    maleGender.name = "gender";
    maleGender.value = "Male";
    maleGender.required = true;

    let maleLabel = document.createElement("label");
    maleLabel.innerText = "Male";
    maleLabel.style.marginLeft = "5px";
    maleLabel.style.marginRight = "10px";

    let femaleGender = document.createElement("input");
    femaleGender.type = "radio";
    femaleGender.name = "gender";
    femaleGender.value = "Female";

    let femaleLabel = document.createElement("label");
    femaleLabel.innerText = "Female";
    femaleLabel.style.marginLeft = "5px";

    let genderContainer = document.createElement("div");
    genderContainer.style.display = "flex";
    genderContainer.style.alignItems = "center";
    genderContainer.style.fontSize = "15px";
    genderContainer.style.justifyContent = "center";

    let maritalStatusContainer = document.createElement("div");
    maritalStatusContainer.style.display = "flex";
    maritalStatusContainer.style.alignItems = "center";
    maritalStatusContainer.style.fontSize = "15px";
    maritalStatusContainer.style.justifyContent = "center";
    maritalStatusContainer.style.marginTop = "10px";

    let maritalStatusLabel = document.createElement("label");
    maritalStatusLabel.innerText = "Accept Terms and Conditions";

    let maritalStatusCheckbox = document.createElement("input");
    maritalStatusCheckbox.type = "checkbox";
    maritalStatusCheckbox.name = "maritalStatus";
    maritalStatusCheckbox.value = "Married";
    maritalStatusCheckbox.style.marginLeft = "10px";

    maritalStatusContainer.append(maritalStatusLabel, maritalStatusCheckbox);

    let registerButton = document.createElement("button");
    registerButton.className = "sign-in-button";
    registerButton.type = "submit";
    registerButton.innerText = "Register";

    let registerLink2 = document.createElement("a");
    registerLink2.href = "./index.html";
    registerLink2.innerText = "Have an account? Log in.";
    registerLink2.style.display = "block";
    registerLink2.style.marginTop = "15px";
    registerLink2.style.color = "rgb(0, 119, 255)";
    registerLink2.style.textDecoration = "none";
    registerLink2.style.fontSize = "1rem";

    form.append(regName);
    form.append(regEmail);
    form.append(regMobileNo);
    genderContainer.append(
        genderLabel,
        maleGender,
        maleLabel,
        femaleGender,
        femaleLabel
    );
    form.append(genderContainer);
    form.append(regPassword);

    form.append(maritalStatusContainer);

    form.append(registerButton);

    document.body.append(registrationGreeting);
    document.body.append(form);
    document.body.append(registerLink2);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Registration successful!");
        form.reset();
    });
});
