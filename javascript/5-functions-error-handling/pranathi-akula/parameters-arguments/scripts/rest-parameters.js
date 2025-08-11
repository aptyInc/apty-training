function calculateSum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const input = document.getElementById("numbers").value;
    const numberArray = input
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));
    const sum = calculateSum(...numberArray);
    document.getElementById("result").textContent = `Result: The sum is: ${sum}`;
  });
