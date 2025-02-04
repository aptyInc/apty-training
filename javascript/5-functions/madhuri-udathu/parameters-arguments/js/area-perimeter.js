function calculateRectangle() {
    // Outer function: Calculates perimeter
    function calculatePerimeter(length = 5, width = 3) {
        const perimeter = 2 * (length + width);

        // Inner function: Calculates area
        function calculateArea() {
            return length * width;
        }

        const area = calculateArea();
        return { perimeter, area };
    }

    const length = parseFloat(document.getElementById('length').value) || 5;
    const width = parseFloat(document.getElementById('width').value) || 3;

    const { perimeter, area } = calculatePerimeter(length, width);

    document.getElementById('result').textContent =
        `Perimeter: ${perimeter}, Area: ${area}`;
}