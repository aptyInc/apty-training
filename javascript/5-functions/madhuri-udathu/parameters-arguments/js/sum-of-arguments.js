function calculateSum() {
    const input = document.getElementById('numbers').value;
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    const sum = (...numbers) => {
        return numbers.reduce((total, num) => total + num, 0);
    };

    const totalSum = sum(...numberArray);
    document.getElementById('result').textContent = `The sum is: ${totalSum}`;
}