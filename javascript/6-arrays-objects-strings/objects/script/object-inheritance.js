

const Person = {
    greet() {
        return `Hello, ${this.name}!`;
    }
};


const Employee = Object.create(Person);


Employee.greet = function () {
    return `Hello, ${this.name} the ${this.job}!`;
};


function displayOutput(message) {
    document.getElementById("output").textContent = message;
}


document.getElementById("createPerson").addEventListener("click", () => {
    const name = document.getElementById("name").value;

    if (!name) {
        displayOutput("Please enter a name for the person.");
        return;
    }

    const person = Object.create(Person);
    person.name = name;

    displayOutput(person.greet());
});

document.getElementById("createEmployee").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;

    if (!name || !job) {
        displayOutput("Please enter both a name and a job for the employee.");
        return;
    }

    const employee = Object.create(Employee);
    employee.name = name;
    employee.job = job;

    displayOutput(employee.greet());
});
