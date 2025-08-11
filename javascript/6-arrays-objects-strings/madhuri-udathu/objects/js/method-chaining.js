class Person {
    constructor() {
        this.name = "";
        this.age = 0;
    }

    setName(name) {
        this.name = name;
        return this; // Return the instance for chaining
    }

    setAge(age) {
        this.age = age;
        return this; // Return the instance for chaining
    }

    greet() {
        const message = `Hello, I am ${this.name}, ${this.age} years old.`;
        document.getElementById("output").textContent = message;
        return this; // Return the instance for chaining if needed
    }
}

function createPerson() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const person = new Person().setName(name).setAge(age).greet();
}