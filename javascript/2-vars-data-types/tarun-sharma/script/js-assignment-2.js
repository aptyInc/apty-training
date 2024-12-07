//variables - var

var name1 = "John"; 

// re declared var variable
function myVar(){
    const element1 = document.getElementById("variable")
    var name1= "Printed using var";
    element1.innerHTML = name1
}

myVar();

//variables - let

let name2 = "Johnny"; 

// re declared let variable
function myLet(){
    let name2= "Printed using let";
    const element2 = document.getElementById("let")
    element2.innerHTML = name2
}

myLet();


//variables - const
// re declared let variable
function myConst(){
    const name3 = "Smith"; 
    name3= "Printed using const";
    const element3 = document.getElementById("constant")
    element3.innerHTML = name3
}

myConst();

// error in console when i run the constant function