function calculateArea() {
    const length = document.getElementById('length').value
    const width = document.getElementById('width').value

  
    const finalLength = length ? parseFloat(length) : 10
    const finalWidth = width ? parseFloat(width) : 5

    const area = finalLength * finalWidth

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`
}