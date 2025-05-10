class Person {
    constructor() {
        this.name = '';
        this.age = 0;
    }

    // Method to set name and return the instance for chaining
    setName(name) {
        this.name = name;
        return this;
    }

    // Method to set age and return the instance for chaining
    setAge(age) {
        this.age = age;
        return this;
    }

    // Method to return the greeting message
    greet() {
        return `Hello, I am ${this.name}, ${this.age} years old.`;
    }
}

// Function to create a new Person and chain methods
function pro() {
    let input = document.getElementById('v1').value;
    let input2 = document.getElementById('v2').value;
    let res = document.getElementById('res');
    
    // Example of method chaining
    let person = new Person().setName(input).setAge(25);
    let result = person.greet();
    
    // Display the result
    res.innerHTML = result;
}