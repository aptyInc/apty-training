function perimeter(length = 10, breadth = 10) {
    function area(length, breadth) {
        const areares = length * breadth;
        return areares;
    }
    const perimeterres = 2 * (length + breadth);
    const arearesult = area(length, breadth);

    return { perimeterres, arearesult };
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = document.getElementById("length").value;
    const num2 = document.getElementById("breadth").value;

    const number1 = num1 ? parseFloat(num1) : undefined;
    const number2 = num2 ? parseFloat(num2) : undefined;

    const res = perimeter(number1, number2);

    document.getElementById("results").innerHTML = `Perimeter: ${res.perimeterres},Area: ${res.arearesult}
    `;
});
