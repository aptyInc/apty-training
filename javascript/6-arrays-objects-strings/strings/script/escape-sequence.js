

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const text = document.getElementById('input').value.trim();
    const result = text.replace(/\n/g, "\\n").replace(/\t/g, "\\t");

    document.getElementById('result').innerText = `Escaped String: ${JSON.stringify(result)}`;

})