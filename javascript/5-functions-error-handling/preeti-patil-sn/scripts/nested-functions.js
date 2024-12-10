function calculate() {
    const length = document.getElementById("length").value || 5; // Default length is 5
    const width = document.getElementById("width").value || 3; // Default width is 3

    const perimeter = 2 * (length + width); // Perimeter calculation

    function calculateArea() {
        return length * width; // Area calculation
    }

    const area = calculateArea(); // Call the inner function to get the area

    document.getElementById("result").innerText = `Perimeter: ${perimeter}, Area: ${area}`;
}
