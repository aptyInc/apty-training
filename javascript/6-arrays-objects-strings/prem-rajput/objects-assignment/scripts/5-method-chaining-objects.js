function createPerson() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name && age) {
        let person = {
            name: "",
            age: 0,

            setName: function (name) {
                this.name = name;
                return this; // Return the object for chaining
            },

            setAge: function (age) {
                this.age = age;
                return this; // Return the object for chaining
            },

            greet: function () {
                return `Hello, I am ${this.name}, ${this.age} years old.`;
            },
        };

        let result = person.setName(name).setAge(age).greet();
        document.getElementById("greeting").innerText = result;
    } else {
        alert("Please provide both name and age!");
    }
}
