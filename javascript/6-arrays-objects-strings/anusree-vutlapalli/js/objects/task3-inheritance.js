function createEmployee() {
    let personName = document.getElementById('personName').value;
    let employeeJob = document.getElementById('employeeJob').value;

    let person = { name: personName };

    let employee = Object.create(person);
    employee.job = employeeJob;

    employee.greet = function() {
        return `Hello, ${this.name} the ${this.job}!`;
    };

    document.getElementById('message').textContent = employee.greet();
}