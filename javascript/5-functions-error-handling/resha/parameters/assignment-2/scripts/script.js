function sum(...args) {
    let total = 0;
    for(let arg of args) {
        total += arg;
    }
    return total;
}

function getValues() {
    const output = document.getElementById('output');
    const num = document.getElementById('num').value;

    const args = num.split(',').map(Number);
    const res = sum(...args);
    
    output.innerText = `Result: ${res}`;

}

