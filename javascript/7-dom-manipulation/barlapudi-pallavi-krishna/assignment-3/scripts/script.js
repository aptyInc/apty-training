const host = document.getElementById("shadow-host");
const shadow = host.attachShadow({ mode: "open" });
const assignmentHTML = `
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>

<table>
  <thead>
    <tr>
      <th>Unique ID</th>
      <th>Shared Class</th>
      <th>HTML Tag</th>
      <th>Element Name</th>
      <th>Custom Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p id="para1">Paragraph</p>
        <p id="para2">Paragraph</p>
      </td>
      <td>
        <p class="highlight">Paragraph with class="highlight"</p>
        <p class="highlight">Another paragraph with class="highlight"</p>
      </td>
      <td>
        <p>Paragraph tag</p>
        <span>Span 1</span>
        <span>Span 2</span>
      </td>
      <td>
        <input type="text" name="username" placeholder="Name=username" />
        <input type="text" name="email" placeholder="Name=email" />
      </td>
      <td>
        <p data-info="first">Paragraph with data-info</p>
      </td>
    </tr>
  </tbody>
</table>
`;

shadow.innerHTML = assignmentHTML;
function changeIdColor() {
  ["para1", "para2"].forEach(id => {
    let el = shadow.getElementById(id);
    if (el) {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      el.style.color = randomColor;
    }
  });
}

function toggleClassBg() {
  let elements = shadow.querySelectorAll(".highlight");
  elements.forEach(el => {
    el.style.backgroundColor = el.style.backgroundColor === "lightblue" ? "" : "lightblue";
  });
}

function changeSpanText() {
  let spans = shadow.querySelectorAll("span");
  spans.forEach((span, i) => {
    span.innerHTML = `Updated Span ${i + 1}<br>`;
  });
}

function toggleNameDisabled() {
  let inputs = shadow.querySelectorAll("input[name]");
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

function addCustomAttribute() {
  let el = shadow.querySelector('[data-info="first"]');
  if (el) {
    el.setAttribute("data-added", "newValue");
    el.textContent += " (new attr added)";
  }
}
document.getElementById("btnIdColor").addEventListener("click", changeIdColor);
document.getElementById("btnClassBg").addEventListener("click", toggleClassBg);
document.getElementById("btnSpanText").addEventListener("click", changeSpanText);
document.getElementById("btnNameDisabled").addEventListener("click", toggleNameDisabled);
document.getElementById("btnCustomAttr").addEventListener("click", addCustomAttribute);
