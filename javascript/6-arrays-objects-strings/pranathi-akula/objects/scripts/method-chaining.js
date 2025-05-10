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
    document.getElementById(
      "output"
    ).textContent = `Hello, I am ${this.name}, ${this.age} years old.`;
    return this;
  }
}

function methodChaining() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  if (name && !isNaN(age)) new Person().setName(name).setAge(age).greet();
  else alert("Please enter a valid name and age.");
}
