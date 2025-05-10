

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();
    const result = text.padStart(10, '0');
    document.getElementById('result').innerText = `After padding to the text is : ${JSON.stringify(result)}`

    document.getElementById('input').value = "";
})