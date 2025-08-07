function introduceUsers() {
  const input = document.getElementById("users").value;
  const output = document.getElementById("result");

  try {
    // Replace single quotes with double quotes to make it JSON-parseable
    const jsonInput = input.replace(/'/g, '"');
    const users = JSON.parse(jsonInput);

    if (!Array.isArray(users)) throw "Invalid input format";

    let msg = "";
    users.forEach((user) => {
      if (!user.name || !user.age) throw "Invalid user object";
      msg += `${user.name} is ${user.age} years old.\n`;
    });

    output.innerText = msg;
  } catch (err) {
    output.innerText = "Invalid input. Please follow the correct format.";
  }
}
