
const shadowContainer = document.getElementById("shadow-container");
const shadowRoot = shadowContainer.attachShadow({ mode: "open" });

const iframeHTML = `

            <table border="1px">
                <tr>
                    <th>ID</th>
                    <th>className</th>
                    <th>Tag</th>
                    <th>name</th>
                    <th>Attribute</th>
                </tr>
                <tr>
                    <td>
                        <p id="para1">p1</p>
                        <button id="changeTextColor">Change Color</button>
                    </td>
                    <td>
                        <p class="sameClass">P1</p>
                        <button id="toggleClass">Toggle Class</button>
                    </td>
                    <td>
                        <span>Span1</span>
                        <button id="changeInnerHTML">Change InnerHTML</button>
                    </td>
                    <td>
                        <input type="text" name="user1" value="User  1" />
                        <button id="toggleDisabled">Toggle Disabled</button>
                    </td>
                    <td>
                        <p data-custom="value1">Paragraph with data-custom="value1"</p>
                        <button id="addCustomAttribute">Add Attribute</button>
                    </td>
                </tr>
            </table>
        `;

const iframe_css = `
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
`;

shadowRoot.innerHTML = iframeHTML + iframe_css;

function setupEventListeners() {

	document
		.getElementById("changeTextColor")

		.addEventListener("click", function () {

			const paragraphs = shadowRoot.querySelectorAll('p[id^="para"]');

			paragraphs.forEach((p) => {
				p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
			});

		});

	document.getElementById("toggleClass").addEventListener("click", function () {

		const elements = shadowRoot.querySelectorAll("[class='sameClass']");
		Array.from(elements).forEach((element) => {

			element.classList.toggle("highlight");
		});

	});


	document
		.getElementById("changeInnerHTML")
		.addEventListener("click", function () {

			const spans = shadowRoot.querySelectorAll("span");
			Array.from(spans).forEach((span) => {

				span.innerHTML = "Updated Content";
			});

		});

	document
		.getElementById("toggleDisabled")
		.addEventListener("click", function () {

			const inputs = shadowRoot.querySelectorAll("[name='user1']");
			inputs.forEach((input) => {
				input.disabled = !input.disabled;

			});

		});

	document
		.getElementById("addCustomAttribute")
		.addEventListener("click", function () {

			const elements = shadowRoot.querySelectorAll("[data-custom]");
			elements.forEach((element) => {

				element.setAttribute("data-new", "new-value");
				console.log(element.getAttribute("data-new"));

			});
		});
}

window.onload = function () {
    
	setupEventListeners();
};
