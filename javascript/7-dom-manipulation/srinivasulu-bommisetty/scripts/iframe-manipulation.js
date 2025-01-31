const frameHTML = `
<table border="1">
  <thead>
    <tr>
      <th>id</th>
      <th>className</th>
      <th>tag</th>
      <th>name</th>
      <th>attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p id="p1">Paragraph 1</p>
        <p id="p2">Paragraph 2</p>
      </td>
      <td>
        <p class="group">Item 1</p>
        <p class="group">Item 2</p>
      </td>
      <td>
        <span>Text 1</span>
        <span>Text 2</span>
      </td>
      <td>
        <input type="text" name="input1" value="Value 1">
        <input type="text" name="input2" value="Value 2">
      </td>
      <td>
        <p data-attr="value1">Custom attribute 1</p>
        <p data-attr="value2">Custom attribute 2</p>
      </td>
    </tr>
  </tbody>
</table>
`;

const iframe = document.getElementById("frame");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(frameHTML);
iframeDoc.close();

function changeColor() {
  const paragraphs = iframeDoc.querySelectorAll('[id^="p"]');
  paragraphs.forEach((p) => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    p.style.color = color;
  });
}

function toggleBackground() {
  const elements = iframeDoc.getElementsByClassName("group");
  Array.from(elements).forEach((el) => {
    el.classList.toggle("color");
    console.log(el);
  });
}

function updateText() {
  const spans = iframeDoc.getElementsByTagName("span");
  Array.from(spans).forEach((span) => {
    span.innerHTML = "Updated Text!";
  });
}

function toggleDisable() {
  const inputs = iframeDoc.getElementsByName("input1");
  Array.from(inputs).forEach((input) => {
    input.disabled = !input.disabled;
  });
}

function addAttribute() {
  const elements = iframeDoc.querySelectorAll("[data-attr]");
  elements.forEach((el) => {
    el.setAttribute("new-attr", "newValue");
  });
}
