

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();

    let result = '';
    if(text.length === 0 ) result = `null`
    else result = `first character is : ${text.charAt(0)} , last character is : ${text.charAt(text.length-1)}`;

    document.getElementById('result').innerText = result

})