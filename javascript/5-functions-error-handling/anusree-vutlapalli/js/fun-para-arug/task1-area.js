function calculateArea() {
    var length = document.getElementById('length').value || 5; // Default: 5
    var width = document.getElementById('width').value || 10;  // Default: 10

    var area = length * width;

    document.getElementById('result').textContent = area;
}
