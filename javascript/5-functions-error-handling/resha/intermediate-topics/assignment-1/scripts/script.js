function repeatAction(func, n) {
    for (let i = 1; i <= n; i++) {
        func(i);
    }
}

function getValues() {
    const output = document.getElementById('output');
    const n = document.getElementById('n').value;
    let result = '';
    repeatAction(function(index) {
        result += `${n} x ${index} = ${n*index} \n`;
    }, n);
    output.innerText = result;
}