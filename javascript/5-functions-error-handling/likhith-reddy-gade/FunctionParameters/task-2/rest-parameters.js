document
  .getElementById("sum-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const numbers = document
      .getElementById("numbers")
      .value.split(",")
      .map(Number);

    const calculateSum = (...args) => args.reduce((sum, num) => sum + num, 0);

    const sum = calculateSum(...numbers);
    document.getElementById("sum-result").textContent = `Sum: ${sum}`;
  });
