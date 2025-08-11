let person = {
    name: '',
    greet: function() {
        return `Hello, ${this.name}`;
    }
};

let employee = Object.create(person);


function createEmployee() {
    let nameInput = document.getElementById('name').value;
    let jobInput = document.getElementById('job').value;

    employee.name = nameInput;
    employee.job = jobInput;

    
    employee.greet = function() {
        return `Hello, ${this.name} the ${this.job}!`;
    };


    let res = document.getElementById('res');
    res.innerHTML = employee.greet();  
}