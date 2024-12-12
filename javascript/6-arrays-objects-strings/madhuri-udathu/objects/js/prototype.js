const Person = {
    name: 'John',
    greet: function () {
        return `Hello, ${this.name}!`;
    }
};

const Employee = Object.create(Person);

Employee.job = 'Developer';
Employee.greet = function () {
    return `Hello, ${this.name} the ${this.job}!`;
};

const outputDiv = document.getElementById('output');
const personGreetButton = document.getElementById('personGreetButton');
const employeeGreetButton = document.getElementById('employeeGreetButton');

// Add event listeners to the buttons
personGreetButton.addEventListener('click', function () {
    outputDiv.innerHTML += `<p>${Person.greet()}</p>`;
});

employeeGreetButton.addEventListener('click', function () {
    outputDiv.innerHTML += `<p>${Employee.greet()}</p>`;
});