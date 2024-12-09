// Function to get values and types from the form
function getValues() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    // Convert values based on selected type
    let input1;
    let input2;

    if (type1 === "number") {
        input1 = Number(value1);
    } else if (type1 === "boolean") {
        input1 = Boolean(value1);
    } else {
        input1 = value1; // Treat as string
    }

    if (type2 === "number") {
        input2 = Number(value2);
    } else if (type2 === "boolean") {
       input2 = Boolean(value2);
    } else {
        input2 = value2; // Treat as string
    }

    return [input1, input2];
}

function displayResult(result) {
    document.getElementById("result").innerHTML = "Result: " + result;
}


function compareEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 == value2);
    
}

function compareStrictEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 === value2);
}

function compareNotEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 != value2);
}

function compareStrictNotEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 !== value2);
}

function compareGreaterThan() {
    const [value1, value2] = getValues();
    displayResult(value1 > value2);
}

function compareLessThan() {
    const [value1, value2] = getValues();
    displayResult(value1 < value2);
}

function compareGreaterThanOrEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 >= value2);
}

function compareLessThanOrEqual() {
    const [value1, value2] = getValues();
    displayResult(value1 <= value2);
}
