// string and number
function myString(){

    let num1 = 3;
    let text1 = "767";

    let result1 = Number(text1);

    const element1 = document.getElementById("string")
    element1.innerHTML = result1;
}

myString();

// boolean and undefined
function myBoolean(){

    let num2 = true;
    let text2

    let result2 = Number(text2);

    const element2 = document.getElementById("boolean")
    element2.innerHTML = result2;
}

myBoolean();

// null and object
function myObject(){

    let num3 = null;
    const text3 = {
        employee1: "tarun",
        employee2: "sai",
        employee3: "prem"
    };

    let result3 = Number(text3);

    const element3 = document.getElementById("object")
    element3.innerHTML = result3;
}

myObject();