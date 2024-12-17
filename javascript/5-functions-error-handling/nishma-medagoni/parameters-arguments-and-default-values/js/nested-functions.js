function calculateRectangle() {
    function calculatePerimeter(l = 10, w = 20) {
        
        const length = parseFloat(document.getElementById('length').value) || l
        const width = parseFloat(document.getElementById('width').value) || w

        function calculateArea() {
            return length * width
        }

        const area = calculateArea(); 
        const perimeter = 2 * (length + width)

        return { perimeter, area } 
    }

    // Call calculatePerimeter and get results
    const { perimeter, area } = calculatePerimeter()

    // Display the results
    document.getElementById('result').innerText =  `Perimeter: ${perimeter} units, Area: ${area} square units`
}
