function calculateArr() {
    const input = document.getElementById("number").value; 
    const numbers = input.split(",").map(Number); 
    let sum = 0;
    for (const num of numbers) {
      sum += num; 
    }

    const average = sum / numbers.length; 
    document.getElementById("result").innerHTML = `
    Sum: ${sum}<br/>
    Average: ${average}
  `;
  }