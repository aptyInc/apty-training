
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    if(number % 2 === 0) result.innerText = `${number} is a even number`;
    else result.innerText = `${number} is a odd number`;

}