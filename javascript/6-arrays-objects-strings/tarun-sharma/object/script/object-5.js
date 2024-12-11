class Person {
    setName(name) {
        this.name = name;

        return this;

    }

    setAge(age) {
        this.age = age;

        return this;
    }

    greet() {

        var message = "hi, im " + this.name + ", " + this.age + " years old.";
        document.getElementById("result").innerText = message;

        return this;
    }
}

function createPerson() {

    
    new Person().setName("lucky").setAge(25).greet();

    
}
