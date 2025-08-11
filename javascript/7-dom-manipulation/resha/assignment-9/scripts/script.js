const iframe = document.getElementById("myIframe");
const iframeDoc = iframe.contentDocument;

iframeDoc.open();
iframeDoc.write(`
  <style>
    table, th, td 
    { 
        border:1px solid black; 
        border-collapse: collapse; 
        padding:5px; }
  </style>
  <table id="myTable"><tbody></tbody></table>
`);
iframeDoc.close();

const tbody = iframeDoc.querySelector("tbody");
for (let i = 1; i <= 10; i++) {
    let row = iframeDoc.createElement("tr");
    let cell = iframeDoc.createElement("td");
    cell.textContent = "Row " + i;
    row.appendChild(cell);
    tbody.appendChild(row);

    let opt = document.createElement("option");
    opt.value = i - 1;
    opt.textContent = "Row " + i;
    document.getElementById("rowSelect").appendChild(opt);
}

const rowSelect = document.getElementById("rowSelect");
document.getElementById("up").onclick = () => {
    let index = +rowSelect.value;
    let row = tbody.children[index];
    if (row.previousElementSibling) {
        tbody.insertBefore(row, row.previousElementSibling);
        rowSelect.value = index - 1;
    }
};
document.getElementById("down").onclick = () => {
    let index = +rowSelect.value;
    let row = tbody.children[index];
    if (row.nextElementSibling) {
        tbody.insertBefore(row.nextElementSibling, row);
        rowSelect.value = index + 1;
    }
};
document.getElementById("top").onclick = () => {
    let index = +rowSelect.value;
    let row = tbody.children[index];
    tbody.insertBefore(row, tbody.firstElementChild);
    rowSelect.value = 0;
};
document.getElementById("bottom").onclick = () => {
    let index = +rowSelect.value;
    let row = tbody.children[index];
    tbody.appendChild(row);
    rowSelect.value = tbody.children.length - 1;
};