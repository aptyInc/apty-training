

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();
    const result = text.split(' ').map(eachWord => eachWord.length).join(' ');

    document.getElementById('result').innerText = `Length of each word is : ${JSON.stringify(result)}`

})