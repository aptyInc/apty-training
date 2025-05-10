function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

document
  .getElementById("fibonacci")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const numberInput = document.getElementById("number").value;
    const number = parseInt(numberInput, 10);

    if (isNaN(number) || number < 1) {
      document.getElementById("result").innerText =
        "Please enter a valid positive number.";
      return;
    }

    const series = [];
    for (let i = 0; i < number; i++) {
      series.push(fibonacci(i));
    }

    document.getElementById(
      "result"
    ).innerText = `Result: Fibonacci series: ${series.join(", ")}`;
  });
