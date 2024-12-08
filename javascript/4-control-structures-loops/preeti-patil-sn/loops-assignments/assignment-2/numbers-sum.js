function calculateSum() {
    let number = document.getElementById("number").value;
    let result = document.getElementById("result");
    result.innerHTML = ""; 
    if (number === "" || isNaN(number) || number <= 0) {
        result.innerHTML = "Please enter a valid positive number.";
        return;
    }

    number = parseInt(number);
    var sum = 0;
    var i = 1;

    while (i <= number) {
        sum += i; 
        i++; 
    }

    result.textContent = `Sum: ${sum}`;
}