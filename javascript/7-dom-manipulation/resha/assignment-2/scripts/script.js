const iframe = document.getElementById("myIframe");

function setupIframeContent() {
    const doc = iframe.contentDocument;

    doc.open();
    doc.write("<!DOCTYPE html><html><head><title>iframe</title></head><body></body></html>");
    doc.close();

    doc.body.innerHTML = `
    <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 6px;
        text-align: center;
        vertical-align: middle;
      }
      button {
        margin-top: 10px;
        display: block;
      }
    </style>

    <div>
      <h2>Accessing and Manipulating Element</h2><br>
      <table>
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
            <span>5678</span><br><br>
          </td>
          <td>
            <input type="text" name="firstInput" value="Input 1"><br><br>
            <input type="text" name="secondInput" value="Input 2"><br><br>
          </td>
          <td>
            <p custom-attr="one">Custom 1</p>
            <p custom-attr="two">Custom 2</p>
            <p id="output"></p>
          </td>
        </tr>
      </table>
    </div>
  `;

    return doc;
}

const doc = setupIframeContent();

const idList = ["p1", "p2", "p3", "p4"];

function changeById() {
    const randomIndex = Math.floor(Math.random() * idList.length);
    const elem = doc.getElementById(idList[randomIndex]);
    if (elem) elem.style.color = 'blue';
}

function changeByClass() {
    const elems = doc.getElementsByClassName('c1');
    for (let el of elems) {
        el.style.backgroundColor = (el.style.backgroundColor === 'yellow') ? '' : 'yellow';
    }
}

function changeSpans() {
    const spans = doc.getElementsByTagName('span');
    for (let sp of spans) {
        sp.textContent = "Changed";
    }
}

function toggleDisable() {
    const inputs1 = doc.getElementsByName("firstInput");
    const inputs2 = doc.getElementsByName("secondInput");
    const allInputs = [...inputs1, ...inputs2];
    for (let input of allInputs) {
        input.disabled = !input.disabled;
    }
}

function addCustomAttr() {
    const elem = doc.querySelector("[custom-attr='one']");
    if (elem) {
        elem.setAttribute("new-attr", "added");
        const output = doc.getElementById("output");
        if (output) output.textContent = "New attribute added to first custom element";
    }
}

document.getElementById('btnChangeById').addEventListener('click', changeById);
document.getElementById('btnChangeByClass').addEventListener('click', changeByClass);
document.getElementById('btnChangeSpans').addEventListener('click', changeSpans);
document.getElementById('btnToggleDisable').addEventListener('click', toggleDisable);
document.getElementById('btnAddCustomAttr').addEventListener('click', addCustomAttr);