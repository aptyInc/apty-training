// string & number
function myString(){

    let num1 = 2;    
    let text1 = "How are you doing?";   

    let result1 = num1 + text1;

    const element1 = document.getElementById("string")
    element1.innerHTML = result1;
}

myString();

// boolean and undefined
function myBoolean(){

    let text2 = true;
    let text3 

    let result2 = text2 + text3;

    const element2 = document.getElementById("boolean");
    element2.innerHTML = result2;
}

myBoolean();

// null and object
function myObject(){

    const name6 = {
        employee1:"tarun", 
        employee2:"sai", 
        employee3:"Prem", 
    };
    
    let text4 

    let result3 = name6.employee1 + text4


    const element3 = document.getElementById("object")
    element3.innerHTML = result3
}

myObject();
