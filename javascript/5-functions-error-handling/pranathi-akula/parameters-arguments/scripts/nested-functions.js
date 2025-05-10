function calculatenested() {
    const length = parseFloat(document.getElementById('length').value) || 10;
    const width = parseFloat(document.getElementById('width').value) || 5;

    function rectangleCalculations(length, width) {
        function calculateArea() {
            return length * width; 
        }
        const perimeter = 2 * (length + width);
        const area = calculateArea();
        return { perimeter, area };
    }

    const { perimeter, area } = rectangleCalculations(length, width);
    document.getElementById('output').textContent = 
        `Results: Perimeter: ${perimeter},  Area: ${area}`;
}
