const perimeterResult = document.getElementById("perimeterResult");
const areaResult = document.getElementById("areaResult");

function computeValues() {
    const lVal = document.getElementById("length").value;
    const wVal = document.getElementById("width").value;

    const length = lVal ? Number(lVal) : undefined;
    const width = wVal ? Number(wVal) : undefined;

    function rectangle(length = 5, width = 3) {
        const perimeter = 2 * (length + width);

        
        function area() {
            return length * width;
        }

        return {
            perimeter,
            area: area()
        };
    }

    const result = rectangle(length, width);

    perimeterResult.textContent = `Perimeter: ${result.perimeter}`;
    areaResult.textContent = `Area: ${result.area}`;
}
