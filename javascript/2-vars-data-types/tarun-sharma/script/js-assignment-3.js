// type of string

function myString(){

    const name1 = "Smith"; 

    const element = document.getElementById("string")
    element.innerHTML = typeof name1
}

myString();

// typeof Number

function myNumber(){

    const name2 = 2; 

    const element2 = document.getElementById("number")
    element2.innerHTML = typeof name2
}

myNumber();

// typeof Boolean

function myBoolean(){

    const name3 = true; 

    const element3 = document.getElementById("boolean")
    element3.innerHTML = typeof name3
}

myBoolean();

// typeof undefined

function myundefined(){

    const name4 = undefined; 

    const element4 = document.getElementById("undefined")
    element4.innerHTML = typeof name4
}

myundefined();

// typeof Null

function myNull(){

    const name5 = null;

    const element5 = document.getElementById("null")
    element5.innerHTML = typeof name5
}

myNull();

// typeof Null

function myObject(){

    const name6 = {
        employee1:"tarun", 
        employee2:"sai", 
        employee1:"Prem", 
    };

    const element6 = document.getElementById("object")
    element6.innerHTML = typeof name6
}

myObject();

