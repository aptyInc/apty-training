function calculateArea() {
    const length = document.getElementById("length").value || 5; // Default length is 5
    const width = document.getElementById("width").value || 3; // Default width is 3

    const area = length * width;

    document.getElementById("result").innerText = `Area: ${area}`;
}
