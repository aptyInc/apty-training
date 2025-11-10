const output = document.getElementById("output");

function makeTable() {
    const num = Number(document.getElementById("numInput").value);

    if (isNaN(num)) {
        output.textContent = "Please enter a valid number!";
        return;
    }

    let content = "";

    for (let i = 1; i <= 10; i++) {
        content += `${num} x ${i} = ${num * i}<br>`;
    }

    output.innerHTML = content;
}
