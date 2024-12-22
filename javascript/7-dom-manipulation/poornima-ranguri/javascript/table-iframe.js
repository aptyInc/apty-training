document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("tableIframe");
  const iframeDocument = iframe.contentDocument;

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // ID
  document.getElementById("idButton").addEventListener("click", function () {
    const paragraphs = iframeDocument.querySelectorAll('[id^="para"]');
    paragraphs.forEach((para) => {
      para.style.color = getRandomColor();
    });
  });

  // Class Name
  document.getElementById("classButton").addEventListener("click", function () {
    console.log("clicked");
    // const paragraphs = iframeDocument.querySelectorAll(".colorClass");

    const paragraphs = iframeDocument.querySelectorAll(".colorClass");

    for (let para of paragraphs) {
      para.classList.toggle("highlight");
    }
  });

  // Tag
  document.getElementById("tagButton").addEventListener("click", function () {
    const spans = iframeDocument.getElementsByTagName("span");
    for (let span of spans) {
      span.innerHTML = "Modified Span Text: " + Math.random().toFixed(2);
    }
  });

  // Name
  document.getElementById("nameButton").addEventListener("click", function () {
    // Correct selector for getElementsByName
    const inputs = iframeDocument.getElementsByName("input1");
    inputs.forEach((input) => {
      input.disabled = !input.disabled;
    });
  });

  // Name2
  document.getElementById("nameButton").addEventListener("click", function () {
    // Correct selector for getElementsByName
    const inputs = iframeDocument.getElementsByName("input2");
    inputs.forEach((input) => {
      input.disabled = !input.disabled;
    });
  });

  // Custom Attribute Manipulation
  document
    .getElementById("attributeButton")
    .addEventListener("click", function () {
      const paragraphs = iframeDocument.querySelectorAll("[data-custom]");
      paragraphs.forEach((para) => {
        para.setAttribute(
          "data-new-custom",
          "New Custom Value " + Math.random().toFixed(2)
        );
      });
    });
});
