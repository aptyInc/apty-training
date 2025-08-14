function updateDimensions() {
  document.getElementById("innerWidth").textContent =
    "Window Inner Width: " + window.innerWidth;
  document.getElementById("innerHeight").textContent =
    "Window Inner Height: " + window.innerHeight;
  document.getElementById("screenWidth").textContent =
    "Screen Width: " + screen.width;
  document.getElementById("screenHeight").textContent =
    "Screen Height: " + screen.height;
  document.getElementById("availWidth").textContent =
    "Available Screen Width: " + screen.availWidth;
  document.getElementById("availHeight").textContent =
    "Available Screen Height: " + screen.availHeight;
  document.getElementById("colorDepth").textContent =
    "Color Depth: " + screen.colorDepth;
  document.getElementById("pixelDepth").textContent =
    "Pixel Depth: " + screen.pixelDepth;
}

updateDimensions();

window.addEventListener("resize", updateDimensions);
