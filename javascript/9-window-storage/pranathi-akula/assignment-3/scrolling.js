function scrollToPosition() {
    const x = document.getElementById('xPosition').value;
    const y = document.getElementById('yPosition').value;
    window.scrollTo(x, y);
  }
  
  function scrollBy10px(direction) {
    if (direction === 'up') {
      window.scrollBy(0, -10);
    } else if (direction === 'down') {
      window.scrollBy(0, 10);
    }
  }
  