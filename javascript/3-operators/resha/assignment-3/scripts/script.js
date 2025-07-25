const output = document.getElementById('output');

function getValues() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let type1 = document.getElementById("type1").value;
    let type2 = document.getElementById("type2").value;

    if (type1 == "number") value1 = Number(value1);
    else if (type1 === "boolean") value1 = value1 === "true";

    if (type2 == "number") value2 = Number(value2);
    else if (type2 === "boolean") value2 = value2 === "true";

    return { value1, value2 };    
}

function looseEquality() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 == value2}`
}

function strictEquality() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 === value2}`
}

function looseInequality() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 != value2}`;
}

function strictInequality() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 !== value2}`;
}

function lessThan() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 < value2}`;
}

function greaterThan() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 > value2}`;
}

function lessThanOrEqualTo() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 <= value2}`;
}

function greaterThanOrEqualTo() {
    let { value1, value2 } = getValues();
    output.innerText = `Result: ${value1 >= value2}`;
}