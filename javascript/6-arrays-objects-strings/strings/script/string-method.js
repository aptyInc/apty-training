

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();
    const result = text.split(' ').sort().join('');

    document.getElementById('result').innerText = `After sort the string is : ${JSON.stringify(result)}`

})