function convert(value, type) {
    if (type === "number") {
        return Number(value);
    }
    if (type === "boolean"){
        return value.toLowerCase() === "true";
    } 
    if (type === "null") {
        return null;
    }
    if (type === "undefined") {
        return undefined;
    }
    if (type === "object") {
        const val=Object(value);
        return val;
    }
    return value; // Default to string
}
function compareValues(operator) {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
    const results=document.getElementById("result").value;
    
    const convert1 = convert(value1, type1);
    const convert2 = convert(value2, type2);
    
    let result;
    switch (operator) {
        case "==":result=convert1==convert2;break;
        case "<=":result=convert1<=convert2;break;
        case ">=":result=convert1>=convert2;break;
        case ">":result=convert1>convert2;break;
        case "<":result=convert1<convert2;break;
        case"===":result=convert1===convert2;break;
        case "!=":result=convert1!=convert2;break;
        case "!==":result=convert1!==convert2;break;
    }

    alert(`Result of ${convert1} ${operator} ${convert2} is : ${result}`);
}


// function onComparision(){
//     let inputElement1 = document.getElementById("value1");
//     let inputElement2 = document.getElementById("value2");

//     let typeElement1 = document.getElementById("type1");
//     let typeElement2 = document.getElementById("type2");

//     console.log(inputElement1.value)
//     console.log(inputElement2.value)
//     console.log(typeElement1.value)
//     console.log(typeElement2.value)

//     let type1 = typeElement1.value;
//     let type2 = typeElement2.value;

//     let value1 = Object(inputElement1.value);
//     let value2 = Object(inputElement2.value);

//     let result = value1 == value2;

//     document.getElementById("result").textContent = `${value1} == ${value2} is ${result}`
// }