let host = document.getElementById("shadowHost");
let shadow = host.attachShadow({ mode: "open" });

let style = document.createElement("style");
style.textContent = `
    h2 {
        text-align: center;
    }
    table, th, td {
        margin: 0 auto;
        border: 1px solid black;
        border-collapse: collapse;
        width: 900px;
        padding: 4px;
        text-align: center;
    }`;

let heading = document.createElement("h2");
heading.innerHTML = `Accessing and Manipulating shadowDOM Elements`;

let table = document.createElement("table");
table.innerHTML = `
    <tr>
        <th>id</th>
        <th>className</th>
        <th>tag</th>
        <th>name</th>
        <th>attribute</th>
    </tr>
    <tr>
        <td>
            <p id="p1">ABCD</p>
            <p id="p2">EFGH</p>
            <p id="p3">IJKL</p>
            <p id="p4">MNO</p>
        </td>
        <td>
            <p class="c1">Class 1</p>
            <p class="c2">Class 2</p>
            <p class="c1">Class 1</p>
            <p class="c1">Class 1</p>
            <p class="c2">Class 2</p>
        </td>
        <td>
            <span>1234</span><br><br>
            <span>5678</span>
        </td>
        <td>
            <input type="text" name="firstInput" value="Input 1"><br><br>
            <input type="text" name="secondInput" value="Input 2">
        </td>
        <td>
            <p custom-attr="one">Custom 1</p>
            <p custom-attr="two">Custom 2</p>
            <p id="output"></p>
        </td>
    </tr>
`;

shadow.appendChild(style);
shadow.appendChild(heading);
shadow.appendChild(table);

function changeById() {
    let ids = ["p1", "p2", "p3", "p4"];
    let random = Math.floor(Math.random() * ids.length);
    shadow.getElementById(ids[random]).style.color = 'blue';
}

function changeByClass() {
    let ele = shadow.getElementsByClassName('c1');
    for (let i of ele) {
        i.style.backgroundColor = 'yellow';
    }
}

function changeSpans() {
    let spans = shadow.getElementsByTagName("span");
    for (let ele of spans) {
        ele.innerHTML = "Changed";
    }
}

function toggleDisable() {
    let input1 = shadow.getElementsByName("firstInput");
    let input2 = shadow.getElementsByName("secondInput");

    let arr = [...input1, ...input2];
    for (let ele of arr) {
        ele.disabled = !ele.disabled;
    }
}

function addCustomAttr() {
    let ele = shadow.querySelector("[custom-attr='one']");
    ele.setAttribute("new-attr", "added");
    output.innerText = "New attribute added to first custom element";
}

