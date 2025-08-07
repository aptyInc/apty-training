class Person {
  constructor() {
    this.name = "";
    this.age = 0;
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
    return `Hello, I am ${this.name}, ${this.age} years old.`;
  }
}

function handleGreet() {
  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();
  const result = document.getElementById("result");

  if (nameInput === "" || ageInput === "") {
    result.innerText = "Please provide both name and age.";
    return;
  }

  const person = new Person().setName(nameInput).setAge(Number(ageInput));
  result.innerText = person.greet();
}
