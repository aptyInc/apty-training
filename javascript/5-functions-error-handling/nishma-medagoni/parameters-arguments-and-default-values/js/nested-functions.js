function calculateRectangle() {

    const length = parseFloat(document.getElementById('length').value) || 10
    const width = parseFloat(document.getElementById('width').value) || 20


    function calculatePerimeter() {
        return 2 * (length + width)
    }

    function calculateArea() {
        return length * width 
    }

    const perimeter = calculatePerimeter()
    const area = calculateArea()

    document.getElementById('result').innerText = `Perimeter: ${perimeter} units, Area: ${area} square units`
}
