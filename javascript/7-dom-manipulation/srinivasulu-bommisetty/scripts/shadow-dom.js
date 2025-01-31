const shadowHost = document.getElementById("shadowHost");

const shadowRoot = shadowHost.attachShadow({ mode: "open" });

const shadowHTML = `
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

const shadowCSS = `
      .highlight {
        background-color: yellow;
      }
    `;

const style = document.createElement("style");
style.textContent = shadowCSS;
shadowRoot.appendChild(style);

shadowRoot.innerHTML += shadowHTML;

function changeColor() {
  const paragraphs = shadowRoot.querySelectorAll('[id^="p"]');
  paragraphs.forEach((p) => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    p.style.color = color;
  });
}

function toggleBackground() {
  const elements = shadowRoot.querySelectorAll(".group");
  elements.forEach((el) => {
    el.classList.toggle("highlight");
  });
}

function updateText() {
  const spans = shadowRoot.querySelectorAll("span");
  spans.forEach((span) => {
    span.innerHTML = "Updated Text!";
  });
}

function toggleDisable() {
  const inputs = shadowRoot.querySelectorAll('input[name="input1"]');
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
}

function addAttribute() {
  const elements = shadowRoot.querySelectorAll("[data-attr]");
  elements.forEach((el) => {
    el.setAttribute("new-attr", "newValue");
  });
}
