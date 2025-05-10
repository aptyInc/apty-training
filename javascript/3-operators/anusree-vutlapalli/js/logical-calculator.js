function getresults() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    let input1;
    let input2;

    if (type1 === "number") {
        input1 = Number(value1);
    } else if (type1 === "boolean") {
        input1 = Boolean(value1);
    } else if (type1 === "null") {
        input1 = null;
    } else if (type1 === "undefines") {
        input1 = undefined;
    } else if (type1 === "object") {
        input1 = Object(value1);
    }
    else {
        input1 = value1;
    }

    if (type2 === "number") {
        input2 = Number(value2);
    } else if (type2 === "boolean") {
        input2 = Boolean(value2);
    } else if (type2 === "null") {
        input2 = null;
    } else if (type2 === "undefines") {
        input2 = undefined;
    } else if (type2 === "object") {
        input2 = Object(value2);
    }
    else {
        input2 = value2;
    }

    return [input1, input2];
}
function displayResult(result) {
    document.getElementById('result').innerHTML = "Result :" + result;
}
function compareLogicalAnd() {
    const [value1, value2] = getresults();
    displayResult(value1 && value2);
}
function compareLogicalOR() {
    const [value1, value2] = getresults();
    displayResult(value1 || value2);
}
function compareLogicalNot() {
    const [value1, value2] = getresults();
    displayResult(`!value1: ${!value1}  !value2: ${!value2}`);
}

