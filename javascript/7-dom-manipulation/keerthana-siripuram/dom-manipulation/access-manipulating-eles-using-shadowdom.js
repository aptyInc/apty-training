// HTML content to be injected into the shadow DOM
const shadowContent = `
<main>
    <section class="container">
        <table>
            <caption>Dom Manipulation</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CLASS</th>
                    <th>TAG</th>
                    <th>NAME</th>
                    <th>ATTRIBUTE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><p id="para1">Para1</p></td>
                    <td><p class="toogle-bg">Text</p></td>
                    <td><span>Span-1</span></td>
                    <td><input type="text" name="name" value="value1" /></td>
                    <td><p data-custom-attr="custom-attr1">Custom attr-1</p></td>
                </tr>
                <tr>
                    <td><p id="para2">Para2</p></td>
                    <td><p class="toogle-bg">Text</p></td>
                    <td><span>Span-2</span></td>
                    <td><input type="text" name="name" value="value1" /></td>
                    <td><p data-custom-attr="custom-attr1">Custom attr-1</p></td>
                </tr>
                <tr>
                    <!-- Directly adding onclick to buttons -->
                    <td><button onclick="changeTextColor()">Change Text Color</button></td>
                    <td><button onclick="toggleBgColor()">Toggle Background Color</button></td>
                    <td><button onclick="changeInnerHtml()">Change InnerHTML</button></td>
                    <td><button onclick="toggleDisabledAttr()">Toggle Disabled Attribute</button></td>
                    <td><button onclick="addNewCustomAttr()">Add New Custom Attribute</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</main>
`;

// Function to attach the content into the shadow DOM
function attachContentToShadow() {
    const shadowHost = document.getElementById('shadowHost');
    
    // Attach the shadow root to the host element
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    
    // Inject the HTML content into the shadow DOM
    shadowRoot.innerHTML = shadowContent;
}


function changeTextColor() {
    const shadowHost = document.getElementById('shadowHost');
    const shadowRoot = shadowHost.shadowRoot; 
    const para1 = shadowRoot.getElementById("para1"); 
    para1.style.color = "green";
}

function toggleBgColor() {
    const shadowHost = document.getElementById('shadowHost');
    const shadowRoot = shadowHost.shadowRoot; 
    const elements = shadowRoot.querySelectorAll("toogle-bg");
    Array.from(elements).forEach(elem => {
        elem.classList.toggle("highlight");
    });
}


function changeInnerHtml() {
    const shadowHost = document.getElementById('shadowHost');
    const shadowRoot = shadowHost.shadowRoot; 
    const spans = shadowRoot.querySelectorAll("span"); 
    Array.from(spans).forEach(span => {
        span.innerHTML = "Updated Span";
    });
}


function toggleDisabledAttr() {
    const shadowHost = document.getElementById('shadowHost');
    const shadowRoot = shadowHost.shadowRoot; 
    const inputs = shadowRoot.querySelectorAll("input[name='name']"); 
    inputs.forEach(input => {
        input.disabled = !input.disabled;
    });
}


function addNewCustomAttr() {
    const shadowHost = document.getElementById('shadowHost');
    const shadowRoot = shadowHost.shadowRoot; 
    const pElems = shadowRoot.querySelectorAll("[data-custom-attr]"); 
    pElems.forEach(p => {
        p.setAttribute('data-new-attr', 'new-custom-value');
    });
}

document.getElementById('attachButton').addEventListener('click', attachContentToShadow);

