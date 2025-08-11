let Person = {
  name: "",
  greet: function () {
    return `Hello, ${this.name}!`;
  },
};

let Employee = Object.create(Person);

// Add a new property and method to Employee
Employee.job = "";
Employee.greet = function () {
  return `Hello, ${this.name} the ${this.job}!`;
};

let employee = Object.create(Employee);
employee.name = "John";
employee.job = "Developer";

document.getElementById("output").textContent = employee.greet();
