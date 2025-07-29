const output = document.getElementById('output');

function generateSum() {
    let n = Number(document.getElementById('n').value);
    
    output.innerText = `Sum of numbers from 1 to ${n} is:`;
    let sum = 0;
    while (n > 0) {
        sum += n;
        n--;
    }
    output.innerText += `${sum}`;
}