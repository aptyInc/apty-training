let person = {
    name: 'Rahul',
    greet: function () {
        return 'Hello, ' + this.name;
    }
};

let employee = Object.create(person);
employee.job = 'Developer';
employee.greet = function () {
    return 'Hello, ' + this.name + ' the ' + this.job + '!';
};

function showGreeting() {
    document.getElementById('output3').innerText = employee.greet();
}