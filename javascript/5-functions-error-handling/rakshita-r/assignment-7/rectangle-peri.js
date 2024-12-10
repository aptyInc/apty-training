function calculateRectangle() {

    function calculatePerimeter(length = 6, width = 9) {
        const perimeter = 2 * (length + width);


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