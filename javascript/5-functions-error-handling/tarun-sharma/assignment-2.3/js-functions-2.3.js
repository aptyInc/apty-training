function calculatePerimeter(length = 5, width = 3) {
    
    function calculateArea() {
        return length * width;
    }

    
    let perimeter = 2 * (length + width);

    
    return {
        perimeter: perimeter,
        area: calculateArea()
    };
}


function calculateRectangle() {
    let lengthInput = document.getElementById("length").value;
    let widthInput = document.getElementById("width").value;

    
    let length = lengthInput ? parseFloat(lengthInput) : undefined;
    let width = widthInput ? parseFloat(widthInput) : undefined;

    
    let results = calculatePerimeter(length, width);

    
    document.getElementById("perimeterResult").innerText = `Perimeter: ${results.perimeter}`;
    document.getElementById("areaResult").innerText = `Area: ${results.area}`;
}