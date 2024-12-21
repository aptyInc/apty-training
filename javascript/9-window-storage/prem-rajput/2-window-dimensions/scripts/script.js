const dimensionsDiv = document.getElementById("dimensions");

function displayDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const outerWidth = window.outerWidth;
    const outerHeight = window.outerHeight;

    dimensionsDiv.innerHTML = `
        <p>Window Width: ${width}px</p>
        <p>Window Height: ${height}px</p>
        <p>Screen Width: ${screenWidth}px</p>
        <p>Screen Height: ${screenHeight}px</p>
        <p>Outer Width: ${outerWidth}px</p>
        <p>Outer Height: ${outerHeight}px</p>
    `;
}

window.addEventListener("resize", displayDimensions);
displayDimensions();
