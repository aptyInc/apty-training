const scrollArea = document.getElementById('scrollArea');
    const currentX = document.getElementById('currentX');
    const currentY = document.getElementById('currentY');

    function updateScrollPosition() {
      currentX.textContent = scrollArea.scrollLeft;
      currentY.textContent = scrollArea.scrollTop;
    }

    function scrollToPosition() {
      const x = parseInt(document.getElementById('xInput').value, 10) || 0;
      const y = parseInt(document.getElementById('yInput').value, 10) || 0;

      scrollArea.scrollTo(x, y);
      updateScrollPosition();
    }

    function scrollUp() {
      scrollArea.scrollBy(0, -10);
      updateScrollPosition();
    }

    function scrollDown() {
      scrollArea.scrollBy(0, 10);
      updateScrollPosition();
    }
    updateScrollPosition();

    scrollArea.addEventListener('scroll', updateScrollPosition);