function calculateRectangle() {
    var length = parseInt(document.getElementById('length').value) || 5; // Default to 5
    var width = parseInt(document.getElementById('width').value) || 3;  // Default to 3

    function perimeter() {
        return 2 * (length + width);
    }

    function area() {
        return length * width;
    }


    document.getElementById('perimeterResult').textContent = "Perimeter: " + perimeter();
    document.getElementById('areaResult').textContent = "Area: " + area();
}
