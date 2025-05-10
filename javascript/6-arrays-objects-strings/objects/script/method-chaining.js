
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

function displayOutput(message) {
    document.getElementById("output").textContent = message;
}

document.getElementById("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (!name || !age) {
        displayOutput("Please enter both name and age.");
        return;
    }

    const person = new Person().setName(name).setAge(age);
    displayOutput(person.greet());
});
