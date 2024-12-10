function calculateRectangleArea(length = 18, width = 10) {
  return length * width;
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const lengthinput = document.getElementById("length").value;
    const widthinput = document.getElementById("width").value;

    const length = lengthinput ? parseFloat(lengthinput) : undefined;
    const width = widthinput ? parseFloat(widthinput) : undefined;

    const area = calculateRectangleArea(length, width);
    
    document.getElementById(
      "result"
    ).textContent = `Result: The area of the rectangle is: ${area}`;
  });
