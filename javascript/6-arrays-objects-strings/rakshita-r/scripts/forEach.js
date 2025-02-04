const users = [];

function addUser() {
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;

  if (nameInput && ageInput) {
    users.push({ name: nameInput, age: parseInt(ageInput) });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    alert("User added successfully!");
  } else {
    alert("Please fill in both name and age fields.");
  }
}

function displayUsers() {
  let messages = "";

  users.forEach((user) => {
    messages += `<p>${user.name} is ${user.age} years old.</p>`;
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = messages;
}

