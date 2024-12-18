const iframeContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Iframe Content</title>
                <style>
                    .highlight {
                        background-color: yellow;
                    }
                </style>
            </head>
            <body>
                <table border="1" style="width: 100%; text-align: center">
                    <tr>
                        <th>id</th>
                        <th>className</th>
                        <th>tag</th>
                        <th>name</th>
                        <th>attribute</th>
                    </tr>
                    <tr>
                        <td>
                            <p id="para1">Hello World!</p>
                            <p id="para2">Welcome!</p>
                        </td>
                        <td>
                            <p class="group">Random Text</p>
                            <p class="group">Random Text 2</p>
                        </td>
                        <td>
                            <span>Initial Text 1</span>
                            <br />
                            <span>Initial Text 2</span>
                        </td>
                        <td>
                            <input type="text" name="input1" value="First Name" />
                            <input type="text" name="input2" value="Last Name" />
                        </td>
                        <td>
                            <p data-custom="value1">Custom Attribute 1</p>
                            <p data-custom="value2">Custom Attribute 2</p>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
        `;

const iframe = document.getElementById("contentIframe");
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(iframeContent);
iframeDoc.close();

document.getElementById("changeColorBtn").addEventListener("click", () => {
    const para1 = iframeDoc.getElementById("para1");
    const para2 = iframeDoc.getElementById("para2");
    if (para1 && para2) {
        para1.style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        para2.style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
});

document.getElementById("toggleClassBtn").addEventListener("click", () => {
    const elements = iframeDoc.getElementsByClassName("group");
    Array.from(elements).forEach((element) => {
        element.classList.toggle("highlight");
    });
});

document.getElementById("changeTextBtn").addEventListener("click", () => {
    const spans = iframeDoc.getElementsByTagName("span");
    Array.from(spans).forEach((span, index) => {
        span.innerHTML = "Updated Text " + (index + 1);
    });
});

document.getElementById("toggleDisabledBtn").addEventListener("click", () => {
    const inputs = iframeDoc.getElementsByName("input1");
    Array.from(inputs).forEach((input) => {
        input.disabled = !input.disabled;
    });
});

document.getElementById("addCustomAttrBtn").addEventListener("click", () => {
    const customElements = iframeDoc.querySelectorAll("[data-custom]");
    customElements.forEach((element, index) => {
        const newValue = "newValue" + (index + 1);
        element.setAttribute("data-new", newValue);
        element.innerHTML += ` (data-new: ${newValue})`;
    });
});
