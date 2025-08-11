
document.getElementById('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputValue = document.getElementById('input').value;
    const inputArr = inputValue.trim().split(',');

    const sentence = inputArr.join(' ');
    const result = sentence.charAt(0).toUpperCase() + sentence.slice(1) +'.';

    document.getElementById('result').innerText = result;
})
