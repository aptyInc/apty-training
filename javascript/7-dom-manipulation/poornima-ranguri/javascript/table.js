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
  const paragraphs = document.querySelectorAll('[id^="para"]');
  paragraphs.forEach((para) => {
    para.style.color = getRandomColor();
  });
});

// Class Name
document.getElementById("classButton").addEventListener("click", function () {
  const paragraphs = document.getElementsByClassName("colorClass");
  for (let para of paragraphs) {
    para.classList.toggle("highlight");
  }
});

// Tag
document.getElementById("tagButton").addEventListener("click", function () {
  const spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.innerHTML = "Modified Span Text: " + Math.random().toFixed(2);
  }
});

// Name
document.getElementById("nameButton").addEventListener("click", function () {
  const inputs = document.getElementsByName("input1");
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
});

// Custom Attribute Manipulation
document
  .getElementById("attributeButton")
  .addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("[data-custom]");
    paragraphs.forEach((para) => {
      para.setAttribute(
        "data-new-custom",
        "New Custom Value " + Math.random().toFixed(2)
      );
    });
  });
