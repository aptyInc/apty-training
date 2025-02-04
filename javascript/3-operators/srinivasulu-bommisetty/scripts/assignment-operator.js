 //  add
 function addAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    value1 += value2;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Result: ${value1} (Value1 += Value2)`;
}

// subtract
function subtractAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    value1 -= value2;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Result: ${value1} (Value1 -= Value2)`;
}

//  multiply 
function multiplyAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    value1 *= value2;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Result: ${value1} (Value1 *= Value2)`;
}

//  divide 
function divideAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    if (value2 === 0) {
        document.getElementById("result").innerHTML = "Error: Division by zero!";
    } else {
        value1 /= value2;
        document.getElementById("value1").value = value1;
        document.getElementById("result").innerHTML = `Result: ${value1} (Value1 /= Value2)`;
    }
}

// modulus
function modulusAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let value2 = parseFloat(document.getElementById("value2").value);
    value1 %= value2;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Result: ${value1} (Value1 %= Value2)`;
}

//  increment
function incrementAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    value1++;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Incremented Value1: ${value1}`;
}

// decrement
function decrementAssign() {
    let value1 = parseFloat(document.getElementById("value1").value);
    value1--;
    document.getElementById("value1").value = value1;
    document.getElementById("result").innerHTML = `Decremented Value1: ${value1}`;
}