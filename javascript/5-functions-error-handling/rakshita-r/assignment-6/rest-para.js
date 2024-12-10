const calculateSum = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

document.getElementById("sumForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const numbersInput = document.getElementById("numbers").value;
  const numbersArray = numbersInput.split(",").map(Number);

  if (numbersArray.some(isNaN)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers!";
    return;
  }

  const sum = calculateSum(...numbersArray);

  document.getElementById(
    "result"
  ).textContent = `The sum of the numbers is: ${sum}`;
});
