document.addEventListener("DOMContentLoaded", () => {
  // Change text color randomly for ID elements
  document.getElementById("changeColor").addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const id1 = document.getElementById("id1");
    const id2 = document.getElementById("id2");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    id1.style.color = randomColor;
    id2.style.color = randomColor;
  });

  // Toggle background color for class elements
  document.getElementById("toggleClass").addEventListener("click", () => {
    const elements = document.getElementsByClassName("class1");
    for (const element of elements) {
      element.classList.toggle("highlight");
    }
  });

  // Change innerHTML for tag elements
  document.getElementById("changeText").addEventListener("click", () => {
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = `Updated Tag Element ${i + 1}`;
    }
  });

  // Toggle disabled attribute for name elements
  document.getElementById("toggleDisabled").addEventListener("click", () => {
    const inputs = document.getElementsByName("name1");
    inputs.forEach((input) => {
      input.disabled = !input.disabled;
    });
  });

  // Add a new custom attribute for querySelector elements
  document.getElementById("addAttribute").addEventListener("click", () => {
    const elements = document.querySelectorAll("[custom-attr]");
    elements.forEach((el, index) => {
      el.setAttribute("new-attr", `new-value-${index + 1}`);
    });
  });
});
