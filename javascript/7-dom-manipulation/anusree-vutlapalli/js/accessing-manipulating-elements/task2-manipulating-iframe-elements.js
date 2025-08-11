const iframe = document.createElement("iframe");
iframe.style.width = "100%";
iframe.style.height = "400px";
iframe.style.border = "1px solid black";
document.body.appendChild(iframe);

const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Iframe Content</title>
        <style>
            .highlight {
                background-color: yellow;
            }
            td {
                text-align: center;
                vertical-align: middle;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <table border="1" style="border-collapse: collapse;">
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
                        <p id="para1">text color change 1</p>
                        <p id="para2">text color change 2</p>
                    </td>
                    <td>
                        <p class="sameClass">text background 1</p>
                        <p class="sameClass">text background 2</p>
                    </td>
                    <td>
                        <span>Span 1</span>
                        <span>Span 2</span>
                    </td>
                    <td>
                        <input type="text" name="input1" value="Input 1">
                        <input type="text" name="input2" value="Input 2">
                        <input type="text" name="input3" value="Input 3">
                    </td>
                    <td>
                        <p data-custom="value1">Custom Attribute 1</p>
                        <p data-custom="value2">Custom Attribute 2</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
`;
iframeDoc.open();
iframeDoc.write(htmlContent);
iframeDoc.close();

function changeTextColor() {
    const ids = ["para1", "para2"];
    ids.forEach(id => {
        const element = iframeDoc.getElementById(id);
        element.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
}

function toggleClassName() {
    const elements = iframeDoc.getElementsByClassName("sameClass");
    for (let element of elements) {
        element.classList.toggle("highlight");
    }
}

function changeSpanText() {
    const spans = iframeDoc.getElementsByTagName("span");
    for (let span of spans) {
        span.innerHTML = "Updated Text";
    }
}

function toggleDisabled() {
    const inputNames = ["input1", "input2", "input3"];
    inputNames.forEach(name => {
        const inputs = iframeDoc.getElementsByName(name);
        for (let input of inputs) {
            input.disabled = !input.disabled;
        }
    });
}

function addCustomAttribute() {
    const element = iframeDoc.querySelector('[data-custom="value1"]');
    element.setAttribute("data-new", "newValue");
    alert("New custom attribute added!");
}

const controlPanel = `
    <h3>Iframe Control Panel</h3>
    <button onclick="changeTextColor()">Change Text Color</button><br><br>
    <button onclick="toggleClassName()">Toggle Background</button><br><br>
    <button onclick="changeSpanText()">Change Span Text</button><br><br>
    <button onclick="toggleDisabled()">Toggle Input Disabled</button><br><br>
    <button onclick="addCustomAttribute()">Add Custom Attribute</button><br><br>
`;

const div = document.createElement("div");
div.innerHTML = controlPanel;
document.body.insertBefore(div, iframe);


