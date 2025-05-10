const shadow_host = document.getElementById("shadow-root");
const shadow_ele = shadow_host.attachShadow({ mode: "open" });

const html_element = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Access & Manipulate Dom</title>
        <link rel="stylesheet" href="../styles/assignment.css" />
    </head>
    <body>
        <header>
            <h1>Accessing and Manipulation Elements</h1>
        </header>

        <main>
            <section>
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
            </section>
        </main>

        <script src="script.js"></script>
    </body>
</html>
`;

shadow_ele.innerHTML = html_element;

function changeColor() {
    const paragraphs = shadow_ele.querySelectorAll('#p1, #p2, #p3');
    paragraphs.forEach(p => {
      p.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
}

function toggleBackgroundColor() {
    const textClassElements = shadow_ele.querySelectorAll('.textClass');
    textClassElements.forEach(element => {
      element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
}

function changeSpanText() {
    const spans = shadow_ele.querySelectorAll('span');
    spans.forEach(span => {
      span.textContent = 'Updated Span Text';
    });
}

function toggleInputDisabled() {
    const inputs = shadow_ele.querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = !input.disabled;
    });
}

function addCustomAttribute() {
    const elements = shadow_ele.querySelectorAll('[data-custom]');
    elements.forEach(element => {
      element.setAttribute('data-new', '999');
    });
}

shadow_ele.getElementById('btn1').addEventListener('click', changeColor);
shadow_ele.getElementById('btn2').addEventListener('click', toggleBackgroundColor);
shadow_ele.getElementById('btn3').addEventListener('click', changeSpanText);
shadow_ele.getElementById('btn4').addEventListener('click', toggleInputDisabled);
shadow_ele.getElementById('btn5').addEventListener('click', addCustomAttribute);
