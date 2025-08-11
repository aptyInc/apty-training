// Function to dynamically create and append forms to the document body
function createForms() {
    // Create a container div
    const container = document.createElement("div");
    container.style.width = "300px";
    container.style.margin = "0 auto";
    container.style.padding = "20px";
    container.style.border = "1px solid #ccc";
    container.style.borderRadius = "8px";
    container.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    container.style.fontFamily = "Arial, sans-serif";
  
    // Create title
    const title = document.createElement("h2");
    title.innerText = "Signup Form";
    title.style.textAlign = "center";
    container.appendChild(title);
  
    // Create signup form
    const signupForm = document.createElement("form");
    signupForm.id = "signupForm";
  
    const signupFields = ["Username", "Email", "Password"];
    signupFields.forEach((field) => {
      const label = document.createElement("label");
      label.innerText = field;
      label.style.display = "block";
      label.style.marginTop = "10px";
  
      const input = document.createElement("input");
      input.type = field.toLowerCase() === "password" ? "password" : "text";
      input.name = field.toLowerCase();
      input.style.width = "100%";
      input.style.padding = "8px";
      input.style.marginTop = "5px";
      input.style.border = "1px solid #ccc";
      input.style.borderRadius = "4px";
  
      signupForm.appendChild(label);
      signupForm.appendChild(input);
    });
  
    const signupButton = document.createElement("button");
    signupButton.type = "button";
    signupButton.innerText = "Signup";
    signupButton.style.marginTop = "15px";
    signupButton.style.width = "100%";
    signupButton.style.padding = "10px";
    signupButton.style.border = "none";
    signupButton.style.borderRadius = "4px";
    signupButton.style.backgroundColor = "#28a745";
    signupButton.style.color = "white";
    signupButton.style.cursor = "pointer";
    signupButton.addEventListener("click", () => {
      alert("Signup form submitted!");
    });
  
    signupForm.appendChild(signupButton);
  
    // Create switch to login form link
    const switchToLogin = document.createElement("p");
    switchToLogin.innerText = "Already have an account? Login here.";
    switchToLogin.style.marginTop = "15px";
    switchToLogin.style.color = "#007bff";
    switchToLogin.style.cursor = "pointer";
    switchToLogin.addEventListener("click", () => {
      container.innerHTML = ""; // Clear container
      createLoginForm(container);
    });
  
    signupForm.appendChild(switchToLogin);
    container.appendChild(signupForm);
  
    document.body.appendChild(container);
  }
  
  function createLoginForm(container) {
    // Create title
    const title = document.createElement("h2");
    title.innerText = "Login Form";
    title.style.textAlign = "center";
    container.appendChild(title);
  
    // Create login form
    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";
  
    const loginFields = ["Email", "Password"];
    loginFields.forEach((field) => {
      const label = document.createElement("label");
      label.innerText = field;
      label.style.display = "block";
      label.style.marginTop = "10px";
  
      const input = document.createElement("input");
      input.type = field.toLowerCase() === "password" ? "password" : "text";
      input.name = field.toLowerCase();
      input.style.width = "100%";
      input.style.padding = "8px";
      input.style.marginTop = "5px";
      input.style.border = "1px solid #ccc";
      input.style.borderRadius = "4px";
  
      loginForm.appendChild(label);
      loginForm.appendChild(input);
    });
  
    const loginButton = document.createElement("button");
    loginButton.type = "button";
    loginButton.innerText = "Login";
    loginButton.style.marginTop = "15px";
    loginButton.style.width = "100%";
    loginButton.style.padding = "10px";
    loginButton.style.border = "none";
    loginButton.style.borderRadius = "4px";
    loginButton.style.backgroundColor = "#007bff";
    loginButton.style.color = "white";
    loginButton.style.cursor = "pointer";
    loginButton.addEventListener("click", () => {
      alert("Login form submitted!");
    });
  
    loginForm.appendChild(loginButton);
  
    // Create switch to signup form link
    const switchToSignup = document.createElement("p");
    switchToSignup.innerText = "Don't have an account? Signup here.";
    switchToSignup.style.marginTop = "15px";
    switchToSignup.style.color = "#007bff";
    switchToSignup.style.cursor = "pointer";
    switchToSignup.addEventListener("click", () => {
      container.innerHTML = ""; // Clear container
      createForms();
    });
  
    loginForm.appendChild(switchToSignup);
    container.appendChild(loginForm);
  }
  
  // Initialize the forms
  createForms();