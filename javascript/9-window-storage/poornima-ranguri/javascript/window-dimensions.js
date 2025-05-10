function updateScreenProperties() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const screenOrientation = screen.orientation.type;

  const properties = `
                Viewport Width: ${width}px
                Viewport Height: ${height}px
                Screen Width: ${screenWidth}px
                Screen Height: ${screenHeight}px
                Screen Orientation: ${screenOrientation}
            `;
  document.getElementById("properties").textContent = properties;
}

window.addEventListener("resize", updateScreenProperties);
updateScreenProperties();
