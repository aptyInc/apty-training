
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    let pyramid = '';

    for(let i = 1 ; i <= number; i++) {
            pyramid += " ".repeat(number - i) + "* ".repeat(i) + "\n";
    }

    result.innerText = `Pyramid pattern for given row is below:\n\n ${pyramid}`; 
}