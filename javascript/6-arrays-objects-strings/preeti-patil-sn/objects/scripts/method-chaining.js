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
    const message = `Hello, I am ${this.name}, ${this.age} years old.`;
    document.getElementById("result").textContent = message;
    return this;
  }
}

document.getElementById("runExample").addEventListener("click", () => {
  new Person().setName("John").setAge(25).greet();
});
