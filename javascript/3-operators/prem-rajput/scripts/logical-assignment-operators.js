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

function logicalAndAssign() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);

    if (v1) {
        v1 &&= v2;
    }

    document.getElementById('result').innerText = v1;
}

function logicalOrAssign() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);

    if (!v1) {
        v1 ||= v2;
    }

    document.getElementById('result').innerText = v1;
}

function nullishCoalesceAssign() {
    let v1 = convert(document.getElementById('value1').value, document.getElementById('type1').value);
    let v2 = convert(document.getElementById('value2').value, document.getElementById('type2').value);

    if (v1 === null || v1 === undefined) {
        v1 ??= v2;
    }

    document.getElementById('result').innerText = v1;
}