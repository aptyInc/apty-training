class Person {
    constructor() {
        this.name = '';
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

function demonstrateChaining() {
    const person = new Person().setName('John').setAge(25).greet();
    document.getElementById('result').innerText = person;
}