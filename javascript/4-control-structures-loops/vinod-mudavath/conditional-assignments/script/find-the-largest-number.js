document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    const value3 = parseInt(document.getElementById("value3").value);
    let result = document.getElementById("result");

    if (value1 > value2) {
        if (value1 > value3) result.innerText = `${value1} is the greatest`;
        else result.innerText = `${value3} is the greatest`;

    } else {
        if (value2 > value3) result.innerText = `${value2} is the greatest`;
        else result.innerText = `${value3} is the greatest`;
    }


}