const main_element = document.querySelector("main");
const main_element_form = document.createElement("div");
main_element.appendChild(main_element_form);

function clear_main_element_form() {
    main_element_form.innerHTML = "";
}

function handleOnSubmit(event) {
    event.preventDefault();
    alert("Form submitted");
}

function createLogin() {
    clear_main_element_form();

    // Create form tag and add class
    const form_tag = document.createElement("form");
    form_tag.setAttribute("class", "login-form");
    form_tag.addEventListener("submit", handleOnSubmit);

    // Create Heading for Login form
    const form_heading = document.createElement("h2");
    form_heading.innerText = "Login";
    form_tag.appendChild(form_heading);

    // Add form into the Html:
    main_element_form.appendChild(form_tag);

    // Creating the Email input
    const email_input = document.createElement("input");
    const email_input_att = {
        type: "email",
        placeholder: "your.email@apty.io",
        required: true,
        class: "registration_email",
    };
    Object.keys(email_input_att).forEach((key) => {
        email_input.setAttribute(key, email_input_att[key]);
    });
    form_tag.appendChild(email_input);

    // Creating the Password input
    const password_input = document.createElement("input");
    const password_input_att = {
        type: "password",
        placeholder: "password",
        required: true,
        class: "registration_password",
    };
    Object.keys(password_input_att).forEach((key) => {
        password_input.setAttribute(key, password_input_att[key]);
    });
    form_tag.appendChild(password_input);

    // Add submit button
    const submit_button = document.createElement("button");
    submit_button.innerText = "Login";
    submit_button.setAttribute("type", "submit");
    form_tag.appendChild(submit_button);
}

function createSignUp() {
    clear_main_element_form();

    // Create form tag and add class
    const form_tag = document.createElement("form");
    form_tag.setAttribute("class", "signup-form");
    form_tag.addEventListener("submit", handleOnSubmit);

    // Create Heading for SignUp form
    const form_heading = document.createElement("h2");
    form_heading.innerText = "Registration";
    form_tag.appendChild(form_heading);

    // Add form into the Html:
    main_element_form.appendChild(form_tag);

    // Creating the Email input
    const email_input = document.createElement("input");
    const email_input_att = {
        type: "email",
        placeholder: "your.email@apty.io",
        required: true,
        class: "registration_email",
    };
    Object.keys(email_input_att).forEach((key) => {
        email_input.setAttribute(key, email_input_att[key]);
    });
    form_tag.appendChild(email_input);

    // Creating the Password input
    const password_input = document.createElement("input");
    const password_input_att = {
        type: "password",
        placeholder: "password",
        required: true,
        class: "registration_password",
    };
    Object.keys(password_input_att).forEach((key) => {
        password_input.setAttribute(key, password_input_att[key]);
    });
    form_tag.appendChild(password_input);

    // Creating the Gender Radio buttons
    const p_select_gender = document.createElement("p");
    p_select_gender.innerHTML = "Select Your Gender";
    form_tag.appendChild(p_select_gender);

    const div_document = document.createElement("div");

    const gender_value = ["female", "male", "other"];
    gender_value.forEach((element) => {
        const label_radio = document.createElement("label");
        label_radio.innerText = element;
        label_radio.setAttribute("for", element);
        const gender_input_tag = document.createElement("input");
        const gender_input_tag_att = {
            type: "radio",
            required: true,
            id: element,
            name: "gender",
            value: element.toLowerCase(),
        };
        Object.keys(gender_input_tag_att).forEach((key) => {
            gender_input_tag.setAttribute(key, gender_input_tag_att[key]);
        });
        div_document.appendChild(gender_input_tag);
        div_document.appendChild(label_radio);
    });
    form_tag.appendChild(div_document);

    // Where do you find our website dropdown
    const p_where = document.createElement("p");
    p_where.innerHTML = "Where did you find our website?";
    form_tag.appendChild(p_where);

    const option_element = document.createElement("select");
    const option_element_att = {
        name: "where",
        required: true,
    };
    Object.keys(option_element_att).forEach((key) => {
        option_element.setAttribute(key, option_element_att[key]);
    });
    const available_options = ["Google", "LinkedIn", "Facebook", "Other"];
    available_options.forEach((element) => {
        const option_tag = document.createElement("option");
        option_tag.innerText = element;
        option_tag.setAttribute("value", element.toLowerCase());
        option_element.appendChild(option_tag);
    });
    form_tag.appendChild(option_element);

    // Create the Feedback Textarea:
    const feedback_tag = document.createElement("textarea");
    const feedback_tag_att = {
        placeholder: "Your feedback here",
        required: true,
        class: "registration_feedback",
    };
    Object.keys(feedback_tag_att).forEach((key) => {
        feedback_tag.setAttribute(key, feedback_tag_att[key]);
    });
    const feedback_label = document.createElement("label");
    feedback_label.innerText = "Feedback";
    feedback_tag.appendChild(feedback_label);

    form_tag.appendChild(feedback_tag);

    // Add Range input (for example: Age)
    const age_label = document.createElement("label");
    age_label.innerText = "Select your Age";
    form_tag.appendChild(age_label);

    const range_input = document.createElement("input");
    const range_input_att = {
        type: "range",
        min: "18",
        max: "100",
        value: "25",
        class: "registration_age",
        required: true,
    };
    Object.keys(range_input_att).forEach((key) => {
        range_input.setAttribute(key, range_input_att[key]);
    });
    form_tag.appendChild(range_input);

    // Add submit button
    const submit_button = document.createElement("button");
    submit_button.innerText = "SignUp";
    submit_button.setAttribute("type", "submit");
    form_tag.appendChild(submit_button);
}

function handleCurrentPage() {
    const login_button = document.createElement("button");
    login_button.setAttribute("class", "toggle-button");
    login_button.innerText = "Login";
    login_button.classList.add("active"); // Default to Login button being active

    login_button.addEventListener("click", () => {
        setActiveButton("login", login_button, signup_button);
        createLogin();
    });

    const signup_button = document.createElement("button");
    signup_button.innerText = "SignUp";
    signup_button.setAttribute("class", "toggle-button");
    signup_button.addEventListener("click", () => {
        setActiveButton("signup", signup_button, login_button);
        createSignUp();
    });

    // Add buttons to the main element
    main_element.appendChild(login_button);
    main_element.appendChild(signup_button);
}

function setActiveButton(activeForm, activeButton, inactiveButton) {
    // Remove 'active' from both buttons
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");

    // Hide or show forms based on active form
    if (activeForm === "login") {
        createLogin();
    } else {
        createSignUp();
    }
}

function onFirstLogin() {
    handleCurrentPage();
    // Initially show the login form
    createLogin();
}

window.onload = onFirstLogin;
