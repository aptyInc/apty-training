function swapValues() {
    let a = parseInt(document.getElementById('valueA').value);
    let b = parseInt(document.getElementById('valueB').value);

    [a, b] = [b, a];

    document.getElementById('output').textContent = `After swapping: A = ${a}, B = ${b}`;
}
