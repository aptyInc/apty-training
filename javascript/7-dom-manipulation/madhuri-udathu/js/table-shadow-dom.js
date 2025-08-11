const shadowContainer = document.getElementById('shadow-container');
const shadowRoot = shadowContainer.attachShadow({ mode: 'open' });


const shadowContent = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: center;
        }
        thead {
          background-color: rgb(197, 134, 249);
        }
        tbody {
          background-color: rgb(236, 216, 252);
        }
        .highlight {
          background-color: yellow;
        }

        button {
          margin-top: 10px;
        }
      </style>
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
            <!-- Column: id -->
            <td>
              <p id="p1">Paragraph 1</p>
              <p id="p2">Paragraph 2</p>
              <p id="p3">Paragraph 3</p>
              <button onclick="changeColorById()">Change Color by ID</button>
            </td>

            <!-- Column: className -->
            <td>
              <p class="group">Group Paragraph 1</p>
              <p class="group">Group Paragraph 2</p>
              <p class="group">Group Paragraph 3</p>
              <button onclick="toggleClassByClassName()">Toggle Background by Class</button>
            </td>

            <!-- Column: tag -->
            <td>
              <span>Span 1</span>
              <span>Span 2</span>
              <span>Span 3</span>
              <button onclick="changeInnerHTMLByTag()">Change InnerHTML by Tag</button>
            </td>

            <!-- Column: name -->
            <td>
              <input type="text" id="input1" value="Input 1">
              <input type="text" id="input2" value="Input 2">
              <input type="text" id="input3" value="Input 3">
              <button onclick="toggleDisabledByName()">Toggle Disabled by Name</button>
            </td>

            <!-- Column: attribute -->
            <td>
              <p data-custom="val1">Custom Attribute 1</p>
              <p data-custom="val2">Custom Attribute 2</p>
              <p data-custom="val3">Custom Attribute 3</p>
              <button onclick="addCustomAttribute()">Add Custom Attribute</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;

shadowRoot.innerHTML = shadowContent;

function changeColorById() {
  const paragraphs = [shadowRoot.querySelector('#p1'), shadowRoot.querySelector('#p2'), shadowRoot.querySelector('#p3')];
  paragraphs.forEach(paragraph => {
    const randomColor = getRandomColor();
    paragraph.style.color = randomColor;
  });
}

// Function to toggle background color of elements with the same class name using getElementsByClassName
function toggleClassByClassName() {
  const groupElements = shadowRoot.querySelector('.group');
    groupElements.classList.toggle('highlight');
  
}

// Function to change innerHTML of all <span> elements using getElementsByTagName
function changeInnerHTMLByTag() {
  const spans = shadowRoot.querySelectorAll('span');
  Array.from(spans).forEach(span => {
    span.innerHTML = 'Updated Text';
  });
}

// Function to toggle the disabled attribute on inputs using getElementsByName
function toggleDisabledByName() {
  const inputs = shadowRoot.getElementById('input1');
  const inputs2 = shadowRoot.getElementById('input2');
  const inputs3 = shadowRoot.getElementById('input3');
  const allInputs = [inputs, inputs2, inputs3];
  allInputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

// Function to add a custom attribute using querySelector
function addCustomAttribute() {
  const elements = shadowRoot.querySelectorAll('[data-custom]');
  elements.forEach((element) => {
    element.setAttribute('data-new', 'new-value');
  });
}

// Helper function to get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}