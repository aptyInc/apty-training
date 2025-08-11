
function calculateArea(length = 10, width = 5) {
    
    const lengthInput = document.getElementById('length').value;
    const widthInput = document.getElementById('width').value;

    
    const finalLength = lengthInput ? Number(lengthInput) : length;
    const finalWidth = widthInput ? Number(widthInput) : width;

    
    const area = finalLength * finalWidth;

    
    document.getElementById('result').textContent = area;
}
