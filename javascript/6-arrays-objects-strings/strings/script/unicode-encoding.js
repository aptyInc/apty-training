

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();

    const uincodeArr = [];

    for (let i = 0; i < text.length; i++) {
        uincodeArr.push(text.charCodeAt(i));
    }

    document.getElementById('result').innerText = `Unicode of each char are : ${JSON.stringify(uincodeArr)}`

    document.getElementById('input').value = "";
})