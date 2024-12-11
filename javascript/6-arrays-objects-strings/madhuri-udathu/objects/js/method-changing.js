class Person {
    constructor() {
        this.name = '';
        this.age = 0;
    }
  
    setName(name) {
        this.name = name;
        return this; 
    }

    setAge(age) {
        this.age = age;
        return this; // Return the instance to allow chaining
    }

    greet() {
        console.log(`Hello, I am ${this.name}, ${this.age} years old.`);
        return this; // Return the instance to allow further chaining if needed
    }
}


let person = new Person().setName('John').setAge(25).greet();