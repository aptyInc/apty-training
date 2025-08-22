function updateScreenInfo() {
  const infoDiv = document.getElementById('info');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const availWidth = window.screen.availWidth;
  const availHeight = window.screen.availHeight;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;
  infoDiv.innerHTML = `
    Viewport Size: ${width} × ${height} px<br>
    Screen Size: ${screenWidth} × ${screenHeight} px<br>
    Available Screen Size: ${availWidth} × ${availHeight} px<br>
    Color Depth: ${colorDepth} bits<br>
    Pixel Depth: ${pixelDepth} bits
  `;
}
updateScreenInfo();
window.addEventListener('resize', updateScreenInfo);
