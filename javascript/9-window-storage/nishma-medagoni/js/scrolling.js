function scrollToPosition() {
  const x = document.getElementById("xPos").value;
  const y = document.getElementById("yPos").value;
  window.scrollTo({ top: y, left: x, behavior: "smooth" });
}

function scrollUp() {
  window.scrollBy({ top: -10, behavior: "smooth" });
}

function scrollDown() {
  window.scrollBy({ top: 10, behavior: "smooth" });
}
