

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`

    document.getElementById('result').innerText = `${JSON.stringify(greeting)}`

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
})