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
    const greeting = `Hello, I am ${this.name}, ${this.age} years old.`;
    return greeting;
  }
}

function createAndGreetPerson() {
  const name = document.getElementById("nameInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();

  if (!name || !age) {
    document.getElementById("result").innerText =
      "Please enter both a name and an age.";
    return;
  }

  const person = new Person().setName(name).setAge(Number(age));
  const greeting = person.greet();

  document.getElementById("result").innerText = greeting;
}
