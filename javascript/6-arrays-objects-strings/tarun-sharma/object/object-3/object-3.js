function inheritance() {

    var Person = {
        
        greet: function() {

            return "Hello, " + this.name + (this.job ? " the " + this.job + "!" : "!");
        }

    };

    var Employee = Object.create(Person);

    Employee.name = "lucky";
    Employee.job = "manager";

    document.getElementById("result").innerText = Employee.greet();

}
