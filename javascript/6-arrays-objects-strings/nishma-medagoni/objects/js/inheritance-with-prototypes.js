// Define the Person object with a greet method
const person = {
    name: 'John',
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};

// Create the Employee object that inherits from Person
const employee = Object.create(person);
employee.job = 'Developer';

// Add a method to the Employee object to modify the greet method
employee.greet = function() {
    return `Hello, ${this.name} the ${this.job}!`;
};


function showGreeting() {
    const greeting = employee.greet();  // Call the greet method from the employee
    document.getElementById('result').innerText = greeting;
}
