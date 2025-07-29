const output = document.getElementById('output');

function generateTable() {
    const n = Number(document.getElementById('n').value);
    
    output.innerText = `Multiplication Table of ${n}:\n`;
    for (let i = 1; i <= 10; i++) {
        output.innerText += `${n} x ${i} = ${n * i}\n`;
    }

}