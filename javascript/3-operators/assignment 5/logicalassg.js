function convertValue(value, type) {
    switch (type) {
        case "number":
            return Number(value);
        case "boolean":
            return value.toLowerCase() === "true";
        default:
            return value; 
    }
}

function getInputValues() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    return { convertedValue1, convertedValue2 };
}

function displayResult(result) {
    document.getElementById("result").innerText = `Result: ${result}`;
}


function logicalAndAssign() {
    let { convertedValue1, convertedValue2 } = getInputValues();
    convertedValue1 &&= convertedValue2; 
    displayResult(convertedValue1);
}


function logicalOrAssign() {
    let { convertedValue1, convertedValue2 } = getInputValues();
    convertedValue1 ||= convertedValue2; 
    displayResult(convertedValue1);
}


function nullishCoalescingAssign() {
    let { convertedValue1, convertedValue2 } = getInputValues();
    convertedValue1 ??= convertedValue2;
}