document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    let numbers = document.getElementById("number").value;
    let result = document.getElementById("result");

    const arrOfNumbers = numbers.trim().split(",");
    let sumOfArrayIs = 0;

    for (let i = 0; i < arrOfNumbers.length; i++) {
        sumOfArrayIs += parseInt(arrOfNumbers[i]);
    }

    result.innerText = `The sum of array is ${sumOfArrayIs} \n The average of array is ${sumOfArrayIs / arrOfNumbers.length}`;

}