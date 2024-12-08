function calculateRectangleProperties() {
    const lengthElement = document.getElementById("length");
    const breadthElement = document.getElementById("breadth");

  
    let length = parseInt(lengthElement.value) || 5;
    let breadth = parseInt(breadthElement.value) || 3;


    function calculatePerimeter(length = 5, breadth = 3) {
        let perimeter = 2 * (length + breadth);

        function calculateArea() {
            return length * breadth;
        }

       
        let area = calculateArea();

     
        document.getElementById("perimeterResult").textContent = `Perimeter: ${perimeter}`;
        document.getElementById("areaResult").textContent = `Area: ${area}`;
    }

    calculatePerimeter(length, breadth);
}
