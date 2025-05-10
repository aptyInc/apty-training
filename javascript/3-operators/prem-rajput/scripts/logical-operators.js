function convert(value, type) {
    if (type === 'number') {
        return Number(value);
    }
    if (type === 'boolean') {
        return value === 'true';
    }
    if (type === 'symbol') {
        return Symbol(value);
    }
    return value;
}

function logicalAnd() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 && v2);
}

function logicalOr() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 || v2);
}

function logicalNot() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    document.getElementById('result').innerText = (!v1);
}