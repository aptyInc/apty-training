function swapVariables() {
  const input = document.getElementById("swap-input").value;

  if (!input || !input.includes(",")) {
    document.getElementById("destructuring-swapping-result").innerText =
      "Invalid input. Please enter two numbers.";
    return;
  }

  let [a, b] = input.split(",").map((item) => parseFloat(item.trim()));

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("destructuring-swapping-result").innerText =
      "Invalid input. Please enter valid numbers.";
    return;
  }

  [a, b] = [b, a];

  document.getElementById(
    "destructuring-swapping-result"
  ).innerText = `Swapped Values: a=${a}, b=${b}`;
}
