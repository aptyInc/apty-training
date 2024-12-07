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

function checkEqual() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 == v2);
}

function checkStrictEqual() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 === v2);
}

function checkNotEqual() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 != v2);
}

function checkStrictNotEqual() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);
    document.getElementById('result').innerText = (v1 !== v2);
}