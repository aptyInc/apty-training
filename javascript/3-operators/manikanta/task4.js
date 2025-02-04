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


function performAnd() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 && val2;  
    document.getElementById('re').innerHTML = result;
}


function performOr() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = val1 || val2;
    document.getElementById('re').innerHTML = result;
}


function performNot() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    let result = `!val1: ${!val1}, !val2: ${!val2}`;
    document.getElementById('re').innerHTML = result;
}