function calculateArrayStats() {
    
    const inputElement = document.getElementById('numberInput');
    const inputValue = inputElement.value.trim();

    const sumResultElement = document.getElementById('sumResult');
    const averageResultElement = document.getElementById('averageResult');

    
    if (!inputValue) {
        sumResultElement.textContent = 'Please enter numbers.';
        averageResultElement.textContent = '';
        return;
    }

    const numbersArray = inputValue.split(',').map(num => {
       
        const parsedNum = parseFloat(num.trim());
       
        return isNaN(parsedNum) ? 0 : parsedNum;
    });

    const validNumbers = numbersArray.filter(num => !isNaN(num));

    if (validNumbers.length === 0) {
        sumResultElement.textContent = 'No valid numbers entered.';
        averageResultElement.textContent = '';
        return;
    }

    
    let sum = 0;
    for (const num of validNumbers) {
        sum += num;
    }

 
    const average = sum / validNumbers.length;


    sumResultElement.textContent = `Sum: ${sum}`;
    averageResultElement.textContent = `Average: ${average.toFixed(2)}`;
}