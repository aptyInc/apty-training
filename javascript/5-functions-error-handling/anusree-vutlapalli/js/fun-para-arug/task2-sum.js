function calculateSum() {
    var input = document.getElementById('numbers').value;

    var numberArray = input.split(','); 
    var numbers = []; 

    for (var i = 0; i < numberArray.length; i++) {
        numbers.push(parseInt(numberArray[i].trim())); 
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    document.getElementById('result').textContent = sum;
}
