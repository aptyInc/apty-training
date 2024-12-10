class Employee {
  constructor() {
    (this.name = ""), (this.age = null);
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  greet() {
    if (this.name && this.age !== null) {
      return `Hello, I am ${this.name}, ${this.age} years old`;
    } else {
      return "Name or age is not set";
    }
  }
}

function onMethodChaining() {
  const userInputElement = document.getElementById("userInput");
  const userAgeElement = document.getElementById("userAge");
  const userInput = userInputElement.value.trim();
  const userAge = parseInt(userAgeElement.value);

  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("errorMesssage");

  let welcomingText = new Employee().setName(userInput).setAge(userAge).greet();
  resultElement.textContent = welcomingText;
}
