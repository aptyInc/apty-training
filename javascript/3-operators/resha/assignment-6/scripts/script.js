const output = document.getElementById('output');

function check() {
    const fn = document.getElementById('fn').value;
    const ln = document.getElementById('ln').value;
    const age = Number(document.getElementById('age').value);

    output.innerHTML = age >= 18 ? `<h2>Hello ${fn + ' ' + ln}, welcome to apty<h2>` : `<h2>Hello ${fn + ' ' + ln}, comeback after ${18 - age} years<h2>`;
} 