document.getElementById("scroll-btn").addEventListener("click", () => {
  const x = parseInt(document.getElementById("x-input").value, 10) || 0;
  const y = parseInt(document.getElementById("y-input").value, 10) || 0;
  window.scrollTo(x, y);
});

document.getElementById("scroll-up-btn").addEventListener("click", () => {
  window.scrollBy(0, -10);
});

document.getElementById("scroll-down-btn").addEventListener("click", () => {
  window.scrollBy(0, 10);
});
