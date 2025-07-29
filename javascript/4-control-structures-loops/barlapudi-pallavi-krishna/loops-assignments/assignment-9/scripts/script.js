function calculateFactorial() {
  const num = parseInt(document.getElementById("number").value);
  document.getElementById("results").innerHTML ="";

  if (isNaN(num) || num < 0) {
    document.getElementById("results").innerText = "Enter a positive number.";
    return;
  } else {
    let steps = "1";
    let fact = 1;
    let i = 1;
    do {
      steps =fact;
      fact *= i;
      document.getElementById("results").innerHTML += `${steps} * ${i} = ${fact}<br>`;
      i++;
    } while (i <= num);
    document.getElementById("results").innerHTML += `The factorial of ${num} is ${fact}`;
  }
}
