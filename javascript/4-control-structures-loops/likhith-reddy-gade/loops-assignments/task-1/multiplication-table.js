function generateTable() {
  const number = parseInt(document.getElementById("number").value);
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${number * i}\n`;
  }

  document.getElementById("result").textContent = result;
}
