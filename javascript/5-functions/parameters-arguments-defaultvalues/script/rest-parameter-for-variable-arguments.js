

function sumNumbers(...numbers) {
    let sum = 0;
    for(let i of numbers) 
        sum += i;
    return sum;
}


document.getElementById('form').onsubmit = (evt) => {
    evt.preventDefault();

    const inputValue = document.getElementById('number1').value;

    let arr = inputValue.split(',').map(num => parseInt(num));

    if(arr.some(isNaN)){
        document.getElementById('result').innerText = 'Please enter a valid comma-separated list of numbers.';
        return;
    }

    const sumOfArr = sumNumbers(...arr);

    document.getElementById('result').innerText = `The sum of number is : ${sumOfArr}`;
}

