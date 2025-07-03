const iframeContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom Manipulation</title>
    <style>
        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .container {
            padding: 10px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width:100%;
        }

        table,
        tr,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .highlight {
            background-color: green;
        }
    </style>
</head>

<body>
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
</body>

</html>
`;

// Function to inject content into the iframe and add listeners to buttons
function manipulateIframe() {
    const iframe = document.getElementById("iframe");

    // Get the iframe's document and inject the HTML content
    const iframeDoc = iframe.contentDocument 
    iframeDoc.open();
    iframeDoc.write(iframeContent);
    iframeDoc.close();

    //  add event listeners to the buttons inside the iframe
    iframe.contentWindow.changeTextColor = function () {
        const para1 = iframe.contentDocument.getElementById("para1");
        para1.style.color = getRandomColor();
    };

    iframe.contentWindow.toggleBgColor = function () {
        const elements = iframe.contentDocument.getElementsByClassName("toogle-bg");
        for (let elem of elements) {
            elem.classList.toggle("highlight");
        }
    };

    iframe.contentWindow.changeInnerHtml = function () {
        const spans = iframe.contentDocument.getElementsByTagName("span");
        for (let span of spans) {
            span.innerHTML = "Updated Span";
        }
    };

    iframe.contentWindow.toggleDisabledAttr = function () {
        const inputs = iframe.contentDocument.getElementsByName("name");
        for (let input of inputs) {
            input.disabled = !input.disabled;
        }
    };

    iframe.contentWindow.addNewCustomAttr = function () {
        const pElems = iframe.contentDocument.querySelectorAll('[data-custom-attr]');
        pElems.forEach(p => {
            p.setAttribute('data-new-attr', 'new-custom-value');
        });
    };
}
