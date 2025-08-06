let person = {
    name: "John",
    greet: function () {
        return `Hello, ${this.name}!`;
    },
};

function createEmployee() {
    let name = document.getElementById("nameInput").value;
    let job = document.getElementById("jobInput").value;

    let employee = Object.create(person);
    employee.name = name;
    employee.job = job;

    employee.greet = function () {
        return `Hello, ${this.name} the ${this.job}!`;
    };

    document.getElementById("result").innerText = employee.greet();
}
