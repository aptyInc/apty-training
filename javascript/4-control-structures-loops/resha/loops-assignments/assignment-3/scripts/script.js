const output = document.getElementById('output');

function generateFactorial() {
    let n = Number(document.getElementById('n').value);
    
    output.innerText = `Factorial of ${n} is:`;
    let mul = 1;
    do {
        mul *= n;
        n--;
    } while (n >= 1);
    output.innerText += `${mul}`;
}