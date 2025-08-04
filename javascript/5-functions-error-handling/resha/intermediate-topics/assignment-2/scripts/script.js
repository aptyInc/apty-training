function higher(callback, x, arr) {
    return callback(x, arr);
}

function getValues() {
    const output = document.getElementById('output');
    const n = document.getElementById('n').value;
    const x = Number(document.getElementById('x').value);
    const arr = n.split(',').map(Number);   

    const res = higher((limit, array) => {
        let a = '';
        for (let i of array) {
            if (i <= limit) {
                a += i + ' ';
            }
        }
        return a;
    }, x, arr);

    output.innerText = `Result: ${res}`;
}