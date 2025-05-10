const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const scrollToButton = document.getElementById("scrollTo");
const scrollUpButton = document.getElementById("scrollUp");
const scrollDownButton = document.getElementById("scrollDown");

scrollToButton.addEventListener("click", () => {
  const x = parseInt(xInput.value);
  const y = parseInt(yInput.value);
  window.scrollTo({
    top: y,
    left: x,
    behavior: "smooth",
  });
});

scrollUpButton.addEventListener("click", () => {
  window.scrollBy({
    top: -10,
    left: 0,
    behavior: "smooth",
  });
});

scrollDownButton.addEventListener("click", () => {
  window.scrollBy({
    top: 10,
    left: 0,
    behavior: "smooth",
  });
});
