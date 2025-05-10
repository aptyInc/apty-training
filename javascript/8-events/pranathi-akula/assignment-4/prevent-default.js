document.getElementById("myForm").addEventListener("submit", function (event) {
  const username = document.getElementById("username");
  const email = document.getElementById("email");

  if (!username.value || !email.value) {
    alert("Please fill in both the username and email fields.");
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
