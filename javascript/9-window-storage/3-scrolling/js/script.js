document.getElementById('scrollToPosition').addEventListener('click', () => {
    const x = parseInt(document.getElementById('xInput').value) || 0;
    const y = parseInt(document.getElementById('yInput').value) || 0;
    window.scrollTo({ left: x, top: y, behavior: 'smooth' });
  });

  document.getElementById('scrollUp').addEventListener('click', () => {
    window.scrollBy({ top: -10, left: 0, behavior: 'smooth' });
  });

  document.getElementById('scrollDown').addEventListener('click', () => {
    window.scrollBy({ top: 10, left: 0, behavior: 'smooth' });
  });