function updateScreenProperties() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const orientation = screen.orientation ? screen.orientation.type : 'N/A';
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <p><strong>Viewport Width:</strong> ${width}px</p>
      <p><strong>Viewport Height:</strong> ${height}px</p>
      <p><strong>Screen Width:</strong> ${screenWidth}px</p>
      <p><strong>Screen Height:</strong> ${screenHeight}px</p>
      <p><strong>Screen Orientation:</strong> ${orientation}</p>
    `;
  }
  updateScreenProperties();
  window.addEventListener('resize', updateScreenProperties);