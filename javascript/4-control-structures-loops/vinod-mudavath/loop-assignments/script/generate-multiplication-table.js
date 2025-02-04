
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    for (let i = 1; i <= 10; i++) {
        result.innerText += `${number}  X  ${i}  =  ${number * i}\n`;
    }

    document.getElementById("number").value = ''

}