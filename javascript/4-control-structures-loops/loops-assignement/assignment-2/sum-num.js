function calculateSum() {
    let num = parseFloat(document.getElementById("num").value);
    let sum = 0;
    let add = 1;
  
    while (add <= num) {
      sum += add;
      add++;
    }
  
    document.getElementById(
      "result"
    ).innerText = `Result: The sum of all numbers from 1 to ${num} is ${sum}.`;
  }