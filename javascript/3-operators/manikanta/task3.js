function conv(val, ty) {
    switch(ty) {
        case "number":
            return Number(val);
        case "boolean":
            return Boolean(val);
        case "string":
            return String(val);
        default:
            return val;
    }
}

function performEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 == val2;
    document.getElementById('re').innerHTML = result;
}


function performStrictEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 === val2;
    document.getElementById('re').innerHTML = result;
}


function performNotEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 != val2;
    document.getElementById('re').innerHTML = result;
}


function performGreaterThan() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 > val2;
    document.getElementById('re').innerHTML = result;
}


function performLessThan() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 < val2;
    document.getElementById('re').innerHTML = result;
}


function performGreaterThanOrEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 >= val2;
    document.getElementById('re').innerHTML = result;
}

function performLessThanOrEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 <= val2;
    document.getElementById('re').innerHTML = result;
}


function performStrictNotEqual() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 !== val2;
    document.getElementById('re').innerHTML = result;
}