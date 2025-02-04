const host = document.getElementById("host");
const template = document.getElementById("tableShadowDom");
const shadow = host.attachShadow({ mode: "open" });
shadow.appendChild(template.content.cloneNode(true));

//Linking CSS External
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../css/table-shadow-dom.css";
shadow.appendChild(link);

//Random Color Generating
const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min - 1) + min);

const randomColor = () =>
  `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )})`;

const changeIdElementColor = document.getElementById("idButton");
changeIdElementColor.addEventListener("click", () => {
  let paragraphElements = shadow.querySelectorAll("#para");
  for (let paraElement of paragraphElements) {
    paraElement.style.color = randomColor();
    paraElement.style.fontWeight = "bold";
    paraElement.style.fontSize = "23px";
  }
});

const classButtonElement = document.getElementById("classButton");
classButtonElement.addEventListener("click", () => {
  const paragraphElements = shadow.querySelectorAll(".colorClass");
  for (let paraElement of paragraphElements) {
    paraElement.classList.toggle("highlight");
  }
});

const tagButtonElement = document.getElementById("tagButton");
tagButtonElement.addEventListener("click", () => {
  const spanElements = shadow.querySelectorAll("span");
  for (let spanElement of spanElements) {
    spanElement.innerHTML = "Modified Span Text: " + Math.random().toFixed(2);
    spanElement.style.backgroundColor = randomColor();
  }
});

const nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", () => {
  const inputElements = shadow.querySelectorAll("input");
  inputElements.forEach((inputElement) => {
    inputElement.disabled = !inputElement.disabled;
  });
});

document
  .getElementById("attributeButton")
  .addEventListener("click", function () {
    const paragraphs = shadow.querySelectorAll("[data-custom]");
    paragraphs.forEach((para) => {
      para.setAttribute(
        "data-new-custom",
        "New Custom Value " + Math.random().toFixed(2)
      );
    });
  });
