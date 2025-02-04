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

function performAndEquals() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    val1 &&= val2;  
    document.getElementById('re').innerHTML = val1;
}

function performOrEquals() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    val1 ||= val2;  
    document.getElementById('re').innerHTML = val1;
}

function performNullishEquals() {
    let val1 = conv(document.getElementById('v1').value, document.getElementById('tv1').value);
    let val2 = conv(document.getElementById('v2').value, document.getElementById('tv2').value);
    val1 ??= val2;  
    document.getElementById('re').innerHTML = val1;
}