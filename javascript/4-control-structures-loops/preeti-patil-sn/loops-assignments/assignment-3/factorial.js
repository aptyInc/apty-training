function calculateFactorial() {
    var number = document.getElementById("number").value;
    var steps = document.getElementById("steps");
    var Result = document.getElementById("result");

    if (number === "" || isNaN(number) || number < 0) {
      Result.innerHTML = "Please enter a valid non-negative number.";
      return;
    }

    number = parseInt(number); // Convert to a number
    var factorial = 1;
    var i = 1;
    var steps = ""; // To record calculation steps

    do {
      factorial *= i;
      steps += `${i}${i < number ? " x " : ""}`; // Add steps
      i++;
    } while (i <= number);

    steps.textContent = `Steps: ${steps}`;
    Result.textContent = `The factorial of ${number} is ${factorial}.`;
  }

