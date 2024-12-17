function introduceUsers() {
  const userInput = prompt("Enter users (format: name-age, name-age):");
  const users = userInput.split(",").map((u) => {
    const [name, age] = u.trim().split("-");
    return { name, age: parseInt(age, 10) };
  });

  let result = "";
  users.forEach((user) => {
    result += `${user.name} is ${user.age} years old.\n`;
  });
  document.getElementById("foreach-result").innerText = result;
}
