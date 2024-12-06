function checkOddEven() {
  const number = parseInt(document.getElementById("number").value);

  if (number % 2 === 0) {
    document.getElementById("result").textContent = `${number} is Even.`;
  } else {
    document.getElementById("result").textContent = `${number} is Odd.`;
  }
}
