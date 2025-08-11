const dimensionDetails = document.getElementById("dimensionDetails");

function updateDimensions() {
  dimensionDetails.textContent = `Window Width: ${window.innerWidth}px, Window Height: ${window.innerHeight}px, Screen Width: ${screen.width}px, Screen Height: ${screen.height}px, Available Width: ${screen.availWidth}px, Available Height: ${screen.availHeight}px`;
}

updateDimensions();
window.addEventListener("resize", updateDimensions);
