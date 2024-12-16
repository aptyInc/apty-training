document
  .getElementById("rectangle-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const length =
      parseFloat(document.getElementById("length").value) || undefined;
    const width =
      parseFloat(document.getElementById("width").value) || undefined;

    const calculateRectangle = (length = 5, width = 3) => {
      const calculatePerimeter = () => 2 * (length + width);
      const calculateArea = () => length * width;

      return { perimeter: calculatePerimeter(), area: calculateArea() };
    };

    const { perimeter, area } = calculateRectangle(length, width);

    document.getElementById(
      "perimeter-result"
    ).textContent = `Perimeter: ${perimeter}`;
    document.getElementById("area-result").textContent = `Area: ${area}`;
  });
