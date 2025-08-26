document.getElementById("scrollToBtn").addEventListener("click", function() {
  let x = parseInt(document.getElementById("xVal").value, 10);
  let y = parseInt(document.getElementById("yVal").value, 10);
  window.scrollTo(x, y);
});

document.getElementById("scrollUp").addEventListener("click", function() {
  window.scrollBy(0, -10);
});

document.getElementById("scrollDown").addEventListener("click", function() {
  window.scrollBy(0, 10);
});
