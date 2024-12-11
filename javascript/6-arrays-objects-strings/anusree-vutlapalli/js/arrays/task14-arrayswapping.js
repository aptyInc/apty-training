function swapValues() {
    let a = parseInt(document.getElementById('inputA').value);
    let b = parseInt(document.getElementById('inputB').value);

    [a, b] = [b, a];

    document.getElementById('result').innerText = `After swapping: a = ${a}, b = ${b}`;
}