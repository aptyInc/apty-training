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

function logicalANDAssignment() {
    let { value1, value2 } = getValues();
    value1 &&= value2;
    output.innerText = `Result: ${value1}`;
}

function logicalORAssignment() {
    let { value1, value2 } = getValues();
    value1 ||= value2;
    output.innerText = `Result: ${value1}`;
}

function nullishCoalescingAssignment() {
    let { value1, value2 } = getValues();
    value1 ??= value2;
    output.innerText = `Result: ${value1}`;
}