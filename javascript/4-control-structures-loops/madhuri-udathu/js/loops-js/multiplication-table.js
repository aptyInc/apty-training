function generateTable() {
    const n = document.getElementById("numberInput").value;
    let display = document.getElementById("table");

    for (let i = 1; i <= 10; i++) {
        let result = i * n;
        const row=document.createElement("p");
        row.textContent=`${n}*${i}=${result}`;
        display.appendChild(row);
    }
}
