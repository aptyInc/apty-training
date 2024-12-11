const Person = {
    name: 'John',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

const Employee = Object.create(Person);

Employee.job = 'Developer';
Employee.greet = function () {
    console.log(`Hello, ${this.name} the ${this.job}!`);
};

console.log("Person greets:");
Person.greet(); // Output: "Hello, John!"

console.log("Employee greets:");
Employee.greet();