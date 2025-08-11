function calculateSumAndAverage() {
    const input = document.getElementById("numberInput").value;
    const numbers = input.split(",").map(Number);
  
    let sum = 0;
    let count = 0;
    for (const number of numbers) {
      sum += number;
      count++;
    }
    const average = sum / count;
    document.getElementById("sumResult").textContent = `Result: Sum: ${sum}`;
    document.getElementById("averageResult").textContent = `Average: ${average}`;
  }