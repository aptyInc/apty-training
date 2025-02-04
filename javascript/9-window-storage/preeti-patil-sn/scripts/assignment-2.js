// Function to display the current screen properties
function updateScreenProperties() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const orientation = screen.orientation ? screen.orientation.type : "Unknown";

  const screenPropertiesDiv = document.getElementById("screenProperties");
  screenPropertiesDiv.textContent = `
      Window Width: ${width}px
      Window Height: ${height}px
      Screen Width: ${screenWidth}px
      Screen Height: ${screenHeight}px
      Screen Orientation: ${orientation}
    `;
}

// Add event listener for the resize event
window.addEventListener("resize", updateScreenProperties);

// Call the function once to display properties on load
updateScreenProperties();
