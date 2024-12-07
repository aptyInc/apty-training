

function performBitwiseAndOperator() {

    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 & val2}`;
    console.log(val1, typeof val1);
    console.log(val2, typeof val2);
}

function performBitwiseOrOperator() {
    console.log("hi...")
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 | val2}`;
}

function performBitwiseXorOperator() {
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 ^ val2}`;

}

function performBitwiseNotOperator() {
    const [val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${~val2}`;
}


function performBitwiseLeftOperator() {
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 << val2}`;
}

function performBitwiseRightOperator() {
    const [val1, val2] = getConvertedValues();
    document.getElementById("result").innerText = `Result: ${val1 >> val2}`;
}


function getConvertedValues() {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);

    return [value1, value2];
}