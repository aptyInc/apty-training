function findPerimeterOfRectangle() {
    let length = parseInt(document.getElementById("length").value)
    let breadth = parseInt(document.getElementById("breadth").value)
    if (isNaN(length) && isNaN(breadth)) {
        calculatePerimeter()
    }
    else if (isNaN(length)) {
        calculatePerimeter(breadth)
    }
    else if (isNaN(breadth)) {
        calculatePerimeter(length)
    }
    else {
        calculatePerimeter(length, breadth)
    }
}
function calculatePerimeter(length = 10, breadth = 20) {
    let perimeter = 2 * (length + breadth)
    calculateArea(length, breadth)
    document.getElementById("perimeter").textContent = `Perimeter of Rectangle is: ${perimeter}`
}
function calculateArea(length, breadth) {
    let area = length * breadth
    document.getElementById("area").textContent = `Area of Rectangle is: ${area}`
}