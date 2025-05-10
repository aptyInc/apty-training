function calculateRectangle(event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById("length").value) || 10;
    const width = parseFloat(document.getElementById("width").value) || 5;

    function calculatePerimeter(length, width){

        const perimeter = 2 * (length + width);

        function calculateArea() {
            return length * width;
        }

        const area = calculateArea();
        return { perimeter, area };

    }

    const { perimeter, area } = calculatePerimeter(length, width);

    document.getElementById("result").innerText = `Perimeter: ${perimeter}, Area: ${area}`;

}
