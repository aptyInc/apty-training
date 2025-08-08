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
        let message = 'Hello, I am ' + this.name + ', ' + this.age + ' years old.';
        document.getElementById('output').innerText = message;
        return this;
    }
}

function createPerson() {
    let person = new Person().setName('Rahul').setAge(25).greet();
}