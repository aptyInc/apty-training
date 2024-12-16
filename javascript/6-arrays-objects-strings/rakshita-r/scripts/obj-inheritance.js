
const Person = {
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};


const Employee = Object.create(Person);

Employee.greet = function() {
    return `Hello, ${this.name} the ${this.job}!`;
};

function demonstrateInheritance() {

    const name = document.getElementById('nameInput').value.trim();
    const job = document.getElementById('jobInput').value.trim();


    if (!name || !job) {
        document.getElementById('result').innerText = "Please enter both a name and a job title.";
        return;
    }

    const employee = Object.create(Employee);
    employee.name = name; 
    employee.job = job;


    const personGreeting = Person.greet.call(employee); 
    const employeeGreeting = employee.greet(); 

    document.getElementById('result').innerText =
        `Person's Greeting:\n${personGreeting}\n\nEmployee's Greeting:\n${employeeGreeting}`;
}
