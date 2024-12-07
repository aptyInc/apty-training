// Function to safely display type coercion results
function displayCoercionResult(elementId, operation) {
    const resultElement = document.getElementById(elementId);
    try {
        resultElement.textContent = operation;
    } catch (error) {
        resultElement.textContent = error.toString();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    displayCoercionResult('result1', 5 + "10");
    displayCoercionResult('result2', "5" + 10);
    displayCoercionResult('result3', true + 5);
    displayCoercionResult('result4', false + "hello");
    displayCoercionResult('result5', undefined + 5);
    displayCoercionResult('result6', null + 5);
    
    // Special case handling for Symbol
    try {
        displayCoercionResult('result7', Symbol("A") + "B");
    } catch (error) {
        document.getElementById('result7').textContent = error.toString();
    }
    
    // Object coercion
    try {
        displayCoercionResult('result8', {} + "hello");
    } catch (error) {
        document.getElementById('result8').textContent = error.toString();
    }
});