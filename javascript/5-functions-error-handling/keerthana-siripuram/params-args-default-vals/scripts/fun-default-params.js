function findAreaOfRectangle() {
    let length = parseInt(document.getElementById("length").value)
    let breadth = parseInt(document.getElementById("breadth").value)
    if (isNaN(length) && isNaN(breadth)) {
        calculate()
    }
    else if (isNaN(length)) {
        calculate(breadth)
    }
    else if (isNaN(breadth)) {
        calculate(length)
    }
    else {
        calculate(length, breadth)
    }
}
function calculate(length = 10, breadth = 20) {
    let area = length * breadth
    document.getElementById("res").textContent = `Area of Rectangle is: ${area}`
}