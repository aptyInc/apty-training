// string
function myString(){

    let name1 = "John";
    let age=30;

    let message = (`Hi my name is ${name1} and i am ${age} years old`);

    const element1 = document.getElementById("string")
    element1.innerHTML = message
}

myString();

// Number
function myNumber(){

    let num1 = 5;
    let num2= 30;

    let message2 = `Combining 2 numbers ${num1} and ${num2}`;

    const element2 = document.getElementById("number")
    element2.innerHTML = message2
}

myNumber();

// boolean
function myBoolean(){

    let b= false;

    let message3 = `Boolean: Apty is service based company :  ${b}`;

    const element3 = document.getElementById("boolean")
    element3.innerHTML = message3
}

myBoolean();

// undefined
function myUndefined(){

    let b
    let message4 = `This is undefined text :  ${b}`;

    const element4 = document.getElementById("undefined")
    element4.innerHTML = message4
}

myUndefined();

// null
function myNull(){

    let b = null;
    let message5 = `This is null text :  ${b}`;

    const element5 = document.getElementById("null")
    element5.innerHTML = message5
}

myNull();

// object
function myObject() {

    const name6 = {
        employee1: "tarun",
        employee2: "sai",
        employee3: "Prem"
    };

    let message6 = `This is object 1: Employee1 is ${name6.employee1}, Employee2 is ${name6.employee2} `;

    const element6 = document.getElementById("object");
    element6.innerHTML = message6;
}

myObject();
