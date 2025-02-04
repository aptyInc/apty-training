function logUserDetails() {
  const input = document.getElementById("userArray").value;
  let users;

  // Try to parse the input string to an array of objects
  try {
    users = JSON.parse(input);
    if (!Array.isArray(users)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("userDetails").innerHTML =
      "<li>Invalid input. Please enter a valid array of objects.</li>";
    return;
  }

  const resultList = document.getElementById("userDetails");
  resultList.innerHTML = "";

  users.forEach((user) => {
    if (user.name && user.age) {
      const message = `${user.name} is ${user.age} years old.`;
      const listItem = document.createElement("li");
      listItem.textContent = message;
      resultList.appendChild(listItem);
    }
  });
}
