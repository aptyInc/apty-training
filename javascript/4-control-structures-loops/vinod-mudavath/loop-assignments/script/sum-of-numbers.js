
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    let temp = number;
    let sum = 0;

    while (number > 0) {
        sum += number;
        number--;
    }

    result.innerText = `The sum of ${temp} is ${sum}`

}