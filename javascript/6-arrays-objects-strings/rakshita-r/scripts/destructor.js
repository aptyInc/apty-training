
function swapValues() {
    
    let a = Number(document.getElementById('varA').value);
    let b = Number(document.getElementById('varB').value);

    [a, b] = [b, a];

    document.getElementById('result').innerText = `Swapped values: a = ${a}, b = ${b}`;
}
