const iframeHTML = `
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Class Name</th>
      <th>Tag</th>
      <th>Name</th>
      <th>Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p id="p1">Paragraph 1</p>
        <p id="p2">Paragraph 2</p>
        <p id="p3">Paragraph 3</p>
      </td>
      <td>
        <p class="sameClass">Class Para 1</p>
        <p class="sameClass">Class Para 2</p>
        <p class="sameClass">Class Para 3</p>
      </td>
      <td>
        <span>Tag Span 1</span>
        <span>Tag Span 2</span>
        <span>Tag Span 3</span>
      </td>
      <td>
        <input type="text" name="input1" value="Value 1">
        <input type="text" name="input2" value="Value 2">
        <input type="text" name="input3" value="Value 3">
      </td>
      <td>
        <p data-info="first">Custom Attribute 1</p>
        <p data-info="second">Custom Attribute 2</p>
        <p data-info="third">Custom Attribute 3</p>
      </td>
    </tr>
  </tbody>
</table>
`;

const iframe = document.getElementById("myIframe");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(`
  <html>
  <head>
    <link rel="stylesheet" href="./Styles/style.css">
  </head>
  <body>
    ${iframeHTML}
  </body>
  </html>
`);
iframeDoc.close();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("btnId").addEventListener("click", () => {
  ["p1", "p2", "p3"].forEach((id) => {
    iframeDoc.getElementById(id).style.color = getRandomColor();
  });
});

document.getElementById("btnClass").addEventListener("click", () => {
  const elements = iframeDoc.getElementsByClassName("sameClass");
  for (let el of elements) el.classList.toggle("bg-toggle");
});

document.getElementById("btnTag").addEventListener("click", () => {
  const spans = iframeDoc.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = `Updated Span ${i + 1}`;
  }
});

document.getElementById("btnName").addEventListener("click", () => {
  const inputs = iframeDoc.querySelectorAll("input[name]");
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
    input.classList.toggle("disabled", input.disabled);
  });
});

document.getElementById("btnAttr").addEventListener("click", () => {
  const element = iframeDoc.querySelector('[data-info="second"]');
  if (element) element.setAttribute("data-new", "added");
});
