function updateScreenInfo() {
    const screenInfo = `
        Screen Width: ${screen.width}px<br>
        Screen Height: ${screen.height}px<br>
        Available Width: ${screen.availWidth}px<br>
        Available Height: ${screen.availHeight}px<br>
        Color Depth: ${screen.colorDepth} bits<br>
        Pixel Depth: ${screen.pixelDepth} bits
    `;
    document.getElementById('screenInfo').innerHTML = screenInfo;
}

// Initialize
updateScreenInfo();

window.addEventListener('resize', updateScreenInfo);