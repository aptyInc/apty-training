let employee_name = document.getElementById("employee_name");
let employee_position = document.getElementById("employee_position");
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, ${this.name}!`;
};

function Employee(name, job) {
  Person.call(this, name);
  this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  return `Hello, ${this.name} the ${this.job}!`;
};

function showGreeting() {
  let person = new Person("John");
  if (!employee_name.value || !employee_position.value) {
    document.getElementById("result").textContent = `values not be empty`;
    return;
  }
  let employee = new Employee(employee_name.value, employee_position.value);

  document.getElementById("result").textContent = employee.greet();
}
