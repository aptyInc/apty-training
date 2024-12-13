function showInheritance() {
    const nameInput = document.getElementById("name").value.trim();
    const jobInput = document.getElementById("job").value.trim();
  
    if (!nameInput || !jobInput) {
      alert("Please enter both name and job.");
      return;
    }
  
    const Person = {
      greet() {
        return `Hello, ${this.name}`;
      }
    };
  
    const person = Object.create(Person);
    person.name = nameInput;
  
    const Employee = Object.create(person);
    Employee.greet = function () {
      return `${person.greet.call(this)} the ${this.job}!`;
    };
    Employee.job = jobInput;
  
    const outputElement = document.getElementById("output");
    outputElement.textContent = Employee.greet();
  }
  