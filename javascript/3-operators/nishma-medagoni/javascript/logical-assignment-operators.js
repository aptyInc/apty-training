function convertedValues() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const convertedValue1 = convertType(value1, type1);
    const convertedValue2 = convertType(value2, type2);

    return { convertedValue1, convertedValue2 };
}

function convertType(value, type) {
    let returnValue;
    if (type === "number") {
        returnValue = Number(value)
    } 
    else if (type === "boolean") {
        returnValue = Boolean(value)
    } 
    else if (type === "object") {
        returnValue = Object(value)
    } 
    else if (type === "undefined") {
        returnValue = undefined;
    } 
    else if (type === "null") {
        returnValue = null;
    } 
    else {
        returnValue = value;
    }
    return returnValue;
}


function andAssignment() {
    let values = convertedValues();
    values.convertedValue1 &&= values.convertedValue2;
    document.getElementById("result").innerText = `Result: ${values.convertedValue1}`;
}

function orAssignment() {
    let values = convertedValues();
    values.convertedValue1 ||= values.convertedValue2;
    document.getElementById("result").innerText = `Result: ${values.convertedValue1}`;
}

function nullishAssignment() {
    let values = convertedValues();
    values.convertedValue1 ??= values.convertedValue2;
    document.getElementById("result").innerText = `Result: ${values.convertedValue1}`;
}
