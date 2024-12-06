function calculateSum() {
       
    const input = document.getElementById("userInput");
    const number = parseInt(input.value);

   
    const resultElement = document.getElementById("result");

  
    if (isNaN(number) || number < 1) {
      resultElement.textContent = "Please enter a valid positive number.";
      return;
    }

    let total = 0;
    let current = 1;
    while (current <= number) {
      total += current;
      current++;
    }

   
    resultElement.textContent = `The sum of numbers from 1 to ${number} is: ${total}`;
  }
