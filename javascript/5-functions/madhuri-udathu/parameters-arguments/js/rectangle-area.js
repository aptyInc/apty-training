function calculateArea(a = 5, b = 3) {

    const length = parseFloat(document.getElementById('length').value) || a;
    const width = parseFloat(document.getElementById('width').value) || b;

    const area = length * width;
    document.getElementById('result').textContent = `The area of the rectangle is: ${area}`;
}