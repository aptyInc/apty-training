function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const factorialResultElement = document.getElementById('factorialResult');
    
    const number = parseInt(numberInput.value);


    if (isNaN(number) || number < 0) {
        factorialResultElement.innerHTML = 'Please enter a non-negative integer.';
        return;
    }

    if (number === 0 || number === 1) {
        factorialResultElement.innerHTML = `
            <p>Factorial of ${number} is 1</p>
        `;
        return;
    }

   
    let result = 1;
    let factorial = number;
    let calculationSteps = `<div class="calculation-step">Initial value: result = 1</div>`;

    do {
        result *= factorial;
        calculationSteps += `<div class="calculation-step">
            ${number}! = ${result} (multiplied by ${factorial})
        </div>`;
        factorial--;
    } while (factorial > 1);


    factorialResultElement.innerHTML = `
        <h3>Factorial Calculation for ${number}!</h3>
        ${calculationSteps}
        <p><strong>Final Result: ${number}! = ${result}</strong></p>
    `;
}