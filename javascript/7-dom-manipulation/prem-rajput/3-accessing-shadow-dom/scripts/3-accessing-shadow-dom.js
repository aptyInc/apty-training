const shadowContent = `
            <style>
                .highlight {
                    background-color: yellow;
                }
            </style>
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
        `;

const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML = shadowContent;

document.getElementById("changeColorBtn").addEventListener("click", () => {
    const para1 = shadowRoot.getElementById("para1");
    const para2 = shadowRoot.getElementById("para2");
    if (para1 && para2) {
        para1.style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        para2.style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
});

document.getElementById("toggleClassBtn").addEventListener("click", () => {
    const elements = shadowRoot.querySelectorAll(".group");
    elements.forEach((element) => {
        element.classList.toggle("highlight");
    });
});

document.getElementById("changeTextBtn").addEventListener("click", () => {
    const spans = shadowRoot.querySelectorAll("span");
    spans.forEach((span, index) => {
        span.textContent = "Updated Text " + (index + 1);
    });
});

document.getElementById("toggleDisabledBtn").addEventListener("click", () => {
    const inputs = shadowRoot.querySelectorAll("input[name='input1']");
    inputs.forEach((input) => {
        input.disabled = !input.disabled;
    });
});

document.getElementById("addCustomAttrBtn").addEventListener("click", () => {
    const customElements = shadowRoot.querySelectorAll("[data-custom]");
    customElements.forEach((element, index) => {
        const newValue = "newValue" + (index + 1);
        element.setAttribute("data-new", newValue);
        element.textContent += ` (data-new: ${newValue})`;
    });
});
