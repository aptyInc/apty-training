
function convertValue(value, type) {

    if (type === "boolean") return Boolean(value);
    if (type === "number") return Number(value);
    if (type === "object") return Object(value);
    return String(value);
}

function performAndOperator() {

    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 && val2}`;
    console.log(val1, typeof val1);
    console.log(val2, typeof val2);
}

function performOrOperator() {
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 || val2}`;
}

function performNotOperator() {
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${!val1 && !val2}`;

}


function getConvertedValues() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;

    const convetedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    return [convetedValue1, convertedValue2];
}