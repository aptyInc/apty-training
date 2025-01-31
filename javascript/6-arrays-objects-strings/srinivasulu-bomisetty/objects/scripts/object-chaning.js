let employee_name = document.getElementById("employee_name");
let employee_position = document.getElementById("employee_position");
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

function showGreeting() {
  const person = new Person()
    .setName(employee_name.value)
    .setAge(employee_age.value);
  document.getElementById("result").textContent = person.greet();
}