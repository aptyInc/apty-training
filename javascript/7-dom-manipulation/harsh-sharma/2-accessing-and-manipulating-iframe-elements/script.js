// Get the iframe element
const iframe = document.getElementById("iframe");

// Get the iframe document
const iframeDocument = iframe.contentWindow.document;

// HTML and CSS content from assignment1
const htmlContent = `
  <div>
    <table>
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
            <p id="p3">Paragraph 3</p>
            <button id="btn1">Change Text Color</button>
          </td>

          <td>
            <p class="textClass">Text 1</p>
            <p class="textClass">Text 2</p>
            <p class="textClass">Text 3</p>
            <button id="btn2">Toggle Background Color</button>
          </td>

          <td>
            <span>Span 1</span>
            <span>Span 2</span>
            <span>Span 3</span>
            <button id="btn3">Change Span Text</button>
          </td>

          <td>
            <input type="text" name="user" value="User 1">
            <input type="text" name="user" value="User 2">
            <input type="text" name="user" value="User 3">
            <button id="btn4">Toggle Disabled</button>
          </td>

          <td>
            <p data-custom="123">Custom Attribute 1</p>
            <p data-custom="456">Custom Attribute 2</p>
            <p data-custom="789">Custom Attribute 3</p>
            <button id="btn5">Add Custom Attribute</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const cssContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
  }
  button {
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
  }
  .highlight {
    color: red;
  }
`;

// iframe.srcdoc = htmlContent; -> This will not manipulate the values.
iframeDocument.open();
iframeDocument.write(htmlContent);
iframeDocument.close();

const style = iframeDocument.createElement('style');
style.innerHTML = cssContent;
iframeDocument.head.appendChild(style);

function changeColor() {
  const iframeContent = iframe.contentWindow.document;
  const paragraphs = iframeContent.querySelectorAll('#p1, #p2, #p3');
  paragraphs.forEach(p => {
    p.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
}

function toggleBackgroundColor() {
  const iframeContent = iframe.contentWindow.document;
  const textClassElements = iframeContent.querySelectorAll('.textClass');
  textClassElements.forEach(element => {
    element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
}

function changeSpanText() {
  const iframeContent = iframe.contentWindow.document;
  const spans = iframeContent.querySelectorAll('span');
  spans.forEach(span => {
    span.textContent = 'Updated Span Text';
  });
}

function toggleInputDisabled() {
  const iframeContent = iframe.contentWindow.document;
  const inputs = iframeContent.querySelectorAll('input');
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

function addCustomAttribute() {
  const iframeContent = iframe.contentWindow.document;
  const elements = iframeContent.querySelectorAll('[data-custom]');
  elements.forEach(element => {
    element.setAttribute('data-new', '999');
  });
  
}

iframeDocument.getElementById('btn1').addEventListener('click', changeColor);
iframeDocument.getElementById('btn2').addEventListener('click', toggleBackgroundColor);
iframeDocument.getElementById('btn3').addEventListener('click', changeSpanText);
iframeDocument.getElementById('btn4').addEventListener('click', toggleInputDisabled);
iframeDocument.getElementById('btn5').addEventListener('click', addCustomAttribute);
