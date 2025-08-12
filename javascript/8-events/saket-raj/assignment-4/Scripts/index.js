const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  if (nameInput.value.trim() === "") {
    event.preventDefault(); //preventing form submiting form
    message.textContent = "Please enter your name";
  } else {
    message.textContent = "";
    alert("Form submitted successfully");
  }
});
