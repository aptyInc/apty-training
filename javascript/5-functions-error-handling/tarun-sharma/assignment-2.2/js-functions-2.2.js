function sumOfNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}


function calculateSum() {
    const input = document.getElementById("numbers").value;
      
    const numberArray = input.split(",").map(num => parseFloat(num.trim()));
    if (numberArray.some(isNaN)) {
        document.getElementById('result').innerText = "Invalid input! Please enter only numbers.";
        return;
    }

   
    const result = sumOfNumbers(...numberArray);

    
    document.getElementById("result").innerText = result;

}