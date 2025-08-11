function updateDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  document.getElementById(
    "dimensions-output"
  ).textContent = `Window Width: ${width}px, Window Height: ${height}px, Screen Width: ${screenWidth}px, Screen Height: ${screenHeight}px`;
}

window.addEventListener("resize", updateDimensions);
updateDimensions();
