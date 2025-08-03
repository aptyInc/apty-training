function calculateArea(l = 10, w = 5) {
    const length = parseFloat(document.getElementById('length').value) || l
    const width = parseFloat(document.getElementById('width').value) || w

    const area = length * width

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`
}
