class Person {
  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  greet() {
    const result = `Hello, I am ${this.name}, ${this.age} years old.`;
    document.getElementById("result").innerText = result;
    return this;
  }
}

function demoChaining() {
  const name = document.getElementById("name").value || "John";
  const age = parseInt(document.getElementById("age").value) || 25;

  new Person().setName(name).setAge(age).greet();
}
