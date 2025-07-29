function calculateSumAverage() {
  const input = document.getElementById("arrayInput").value;

  const numberStrings = input.split(",");
  const numbers = [];

  for (let item of numberStrings) {
    let num = parseFloat(item.trim());
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }

  if (numbers.length === 0) {
   document.getElementById("results").innerText = "Please enter at least one valid number.";
    return;
  }

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  const average = sum / numbers.length;

  document.getElementById("results").innerHTML = `
        Sum: ${sum}<br>
        Average: ${average.toFixed(2)}
      `;
}
