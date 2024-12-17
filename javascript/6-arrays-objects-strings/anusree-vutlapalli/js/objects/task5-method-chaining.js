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

function createPerson() {
    
    let personName = document.getElementById('name').value;
    let personAge = document.getElementById('age').value;

    
    let person = new Person().setName(personName).setAge(personAge);

    document.getElementById('greetingMessage').textContent = person.greet();
}