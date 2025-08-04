function convertStr(callback, s = 'rahul') {
    let sas = s.toUpperCase();
    console.log(sas);
    return callback(sas);
}

function print(s) {
    return `Result: ${s}`;
}

function getValues() {
    const output = document.getElementById('output');
    const str = document.getElementById('str').value;

    const s = str || undefined;
    const res = convertStr(print, s);
    output.innerText = res;

}
