const resultElement = document.getElementById("result");

const sectionElements = document.querySelector("#section-elements");
sectionElements.addEventListener("click", () => {
  const totalElements = document.querySelectorAll("section");
  resultElement.textContent = `${totalElements.length} Section Elements`;
});

const headingElements = document.querySelector("#heading-elements");
headingElements.addEventListener("click", () => {
  const totalElements = document.querySelectorAll("h1");
  resultElement.textContent = `${totalElements.length} Heading Elements`;
});

const paragraphElements = document.querySelector("#paragraph-elements");
paragraphElements.addEventListener("click", () => {
  const totalElements = document.querySelectorAll("p");
  resultElement.textContent = `${totalElements.length} Paragraph Elements`;
});

const listElements = document.querySelector("#list-elements");
listElements.addEventListener("click", () => {
  const totalElements = document.querySelectorAll("li");
  resultElement.textContent = `${totalElements.length} List Elements`;
});
