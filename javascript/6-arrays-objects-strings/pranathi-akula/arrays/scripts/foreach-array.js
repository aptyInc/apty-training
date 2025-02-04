const users = [];

function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    users.push({ name: name, age: parseInt(age) });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    alert("User added!");
  } else {
    alert("Please enter both name and age.");
  }
}

function usersIntroduction() {
  const messageContainer = document.getElementById("output");
  messageContainer.innerHTML = "Result:";

  if (users.length === 0) {
    messageContainer.innerHTML += "<p>No users added yet.</p>";
  } else {
    users.forEach((user) => {
      const message = `${user.name} is ${user.age} years old.`;
      const paragraph = document.createElement("p");
      paragraph.textContent = message;
      messageContainer.appendChild(paragraph);
    });
  }
}
