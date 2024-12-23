function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const screenAvailWidth = screen.availWidth;
    const screenAvailHeight = screen.availHeight;

    document.getElementById('dimensions').innerHTML = `
        Window Width: ${width} px<br>
        Window Height: ${height} px<br>
        Screen Width: ${screenWidth} px<br>
        Screen Height: ${screenHeight} px<br>
        Available Screen Width: ${screenAvailWidth} px<br>
        Available Screen Height: ${screenAvailHeight} px
    `;
}

window.addEventListener('resize', updateDimensions);
updateDimensions();
