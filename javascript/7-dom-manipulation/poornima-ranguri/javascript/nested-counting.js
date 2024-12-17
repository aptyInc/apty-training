const resultElement = document.getElementById("result");

function countNestedElements(parentSelector) {
  const parentElements = document.querySelectorAll(parentSelector);
  const nestedElementCounts = {};

  parentElements.forEach((parent) => {
    const nestedTags = [
      "div",
      "p",
      "span",
      "iframe",
      "a",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "li",
      "img",
    ];

    nestedTags.forEach((tag) => {
      const elements = parent.querySelectorAll(tag);
      if (elements.length > 0) {
        nestedElementCounts[tag] =
          (nestedElementCounts[tag] || 0) + elements.length;
      }
    });
  });

  // Generate result string
  let resultString = `Nested Elements in ${parentSelector}:\n`;
  for (const [tag, count] of Object.entries(nestedElementCounts)) {
    resultString += `${tag}: ${count}\n`;
  }

  resultElement.textContent = resultString;
}

const sectionElements = document.querySelector("#section-elements");
sectionElements.addEventListener("click", () => countNestedElements("section"));

const headingElements = document.querySelector("#heading-elements");
headingElements.addEventListener("click", () => countNestedElements("header"));

const paragraphElements = document.querySelector("#paragraph-elements");
paragraphElements.addEventListener("click", () =>
  countNestedElements(".hero-container")
);

const listElements = document.querySelector("#list-elements");
listElements.addEventListener("click", () =>
  countNestedElements(".page-submenu")
);
