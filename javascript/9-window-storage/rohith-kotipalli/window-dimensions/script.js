function updateScreenProperties() {
    const widthSpan = document.getElementById('width');
    const heightSpan = document.getElementById('height');
    const pixelRatioSpan = document.getElementById('pixelRatio');
    const screenWidthSpan = document.getElementById('screenWidth');
    const screenHeightSpan = document.getElementById('screenHeight');
    const availWidthSpan = document.getElementById('availWidth');
    const availHeightSpan = document.getElementById('availHeight');

    widthSpan.textContent = window.innerWidth;
    heightSpan.textContent = window.innerHeight;
    pixelRatioSpan.textContent = window.devicePixelRatio;
    screenWidthSpan.textContent = screen.width;
    screenHeightSpan.textContent = screen.height;
    availWidthSpan.textContent = screen.availWidth;
    availHeightSpan.textContent = screen.availHeight;
  }

  window.addEventListener('resize', updateScreenProperties);

  updateScreenProperties();