document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("shadowHost");

  // Attach shadow DOM to the host element
  const shadowRoot = host.attachShadow({ mode: "open" });

  // Define the HTML and CSS to be inserted into the shadow DOM
  const shadowContent = `
      <style>
          .highlight { background-color: yellow; }
      </style>
  
      <div id="id1">ID 1 Element</div>
      <div id="id2">ID 2 Element</div>
      <div class="class1">Class 1 Element</div>
      <div class="class1">Another Class 1 Element</div>
      <span>Tag Element 1</span>
      <span>Tag Element 2</span>
      <input name="name1" value="Input 1">
      <input name="name1" value="Input 2">
      <div custom-attr="value1">Custom Attribute Element 1</div>
      <div custom-attr="value2">Custom Attribute Element 2</div>
    `;

  // Insert the HTML and CSS inside the shadow DOM
  shadowRoot.innerHTML = shadowContent;

  // Define functions for handling button clicks
  const changeColor = () => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const id1 = shadowRoot.querySelector("#id1");
    const id2 = shadowRoot.querySelector("#id2");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    id1.style.color = randomColor;
    id2.style.color = randomColor;
  };

  const toggleClass = () => {
    const elements = shadowRoot.querySelectorAll(".class1");
    elements.forEach((element) => {
      element.classList.toggle("highlight");
    });
  };

  const changeText = () => {
    const spans = shadowRoot.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.innerHTML = `Updated Tag Element ${index + 1}`;
    });
  };

  const toggleDisabled = () => {
    const inputs = shadowRoot.querySelectorAll("input[name='name1']");
    inputs.forEach((input) => {
      input.disabled = !input.disabled;
    });
  };

  const addAttribute = () => {
    const elements = shadowRoot.querySelectorAll("[custom-attr]");
    elements.forEach((el, index) => {
      el.setAttribute("new-attr", `new-value-${index + 1}`);
    });
  };

  // Add event listeners to the buttons outside the shadow DOM
  document.getElementById("changeColor").addEventListener("click", changeColor);
  document.getElementById("toggleClass").addEventListener("click", toggleClass);
  document.getElementById("changeText").addEventListener("click", changeText);
  document
    .getElementById("toggleDisabled")
    .addEventListener("click", toggleDisabled);
  document
    .getElementById("addAttribute")
    .addEventListener("click", addAttribute);
});
