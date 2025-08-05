function generateGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

function handleOnSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector("#name_input").value.trim();
  const ageInput = parseInt(document.querySelector("#age_input").value, 10);

  if (!nameInput || isNaN(ageInput)) {
    document.querySelector(".output").innerText =
      "Please enter valid name and age.";
    return;
  }

  const result = generateGreeting(nameInput, ageInput);
  document.querySelector(".output").innerText = result;
}
