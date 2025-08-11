function showInheritance() {
  const name = document.getElementById("personName").value || "John";
  const job = document.getElementById("job").value || "Developer";

  let person = {
    name: name,
    greet: function () {
      return `Hello, ${this.name} the ${this.job}!`;
    },
  };

  let employee = Object.create(person);
  employee.job = job;

  const result = employee.greet();
  document.getElementById("result").innerText = result;
}
