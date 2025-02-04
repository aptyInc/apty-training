function convertValue(value, type) {
    switch (type) {
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
        case 'boolean':
            return value.toLowerCase() === 'true';
        case 'null':
            return value.toLowerCase() === 'null' ? null : value;
        default:
            return value;
    }
}


function performAnd() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    const result = convertedValue1 && convertedValue2;

    document.getElementById('resultValue').textContent = result;
}


function performOr() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    const result = convertedValue1 || convertedValue2;

    document.getElementById('resultValue').textContent = result;
}


function performNot() {
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;

    const convertedValue1 = convertValue(value1, type1);

    const result = !convertedValue1;

    document.getElementById('resultValue').textContent = result;
}