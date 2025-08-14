function scrollToPosition() {
  let x = parseInt(document.getElementById("xPos").value);
  let y = parseInt(document.getElementById("yPos").value);
  window.scrollTo(x, y);
}

function scrollUp() {
  window.scrollBy(0, -10);
}

function scrollDown() {
  window.scrollBy(0, 10);
}
