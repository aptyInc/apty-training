function updateWindowDimensions() {
  document.getElementById("width").textContent = window.outerWidth;
  document.getElementById("height").textContent = window.outerHeight;
  document.getElementById("innerWidth").textContent = window.innerWidth;
  document.getElementById("innerHeight").textContent = window.innerHeight;
  document.getElementById("screenWidth").textContent = screen.width;
  document.getElementById("screenHeight").textContent = screen.height;
}
window.addEventListener("resize", updateWindowDimensions);
updateWindowDimensions();
