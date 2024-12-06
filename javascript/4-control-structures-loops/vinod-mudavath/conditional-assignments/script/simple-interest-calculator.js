
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const pa = parseInt(document.getElementById("principalammount").value);
    const ri = parseInt(document.getElementById("rateofinterest").value);
    const time = parseInt(document.getElementById("time").value);
    let result = document.getElementById("result");


    const interest = (pa * ri * time) /100;
    result.innerText = `interest is ${interest};`
    

}