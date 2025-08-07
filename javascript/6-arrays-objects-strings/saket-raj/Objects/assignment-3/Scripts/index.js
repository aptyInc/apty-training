function showGreeting() {
  const name = document.getElementById("name").value.trim();
  const job = document.getElementById("job").value.trim();
  const result = document.getElementById("result");

  if (!name || !job) {
    result.innerText = "Please enter both name and job.";
    return;
  }

  let person = {
    name: name,
    greet: function () {
      return `Hello, ${this.name}`;
    },
  };

  let employee = Object.create(person);
  employee.job = job;

  employee.greet = function () {
    return `Hello, ${this.name} the ${this.job}!`;
  };

  result.innerText = employee.greet();
}
