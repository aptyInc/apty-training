document
  .getElementById("area-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const length =
      parseFloat(document.getElementById("length").value) || undefined;
    const width =
      parseFloat(document.getElementById("width").value) || undefined;

    const calculateArea = (length = 5, width = 3) => length * width;

    const area = calculateArea(length, width);
    document.getElementById("result").textContent = `Area: ${area}`;
  });
