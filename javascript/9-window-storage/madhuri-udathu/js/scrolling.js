document.getElementById('scrollToPosition').addEventListener('click', function() {
    const x = parseInt(document.getElementById('x').value) || 0;
    const y = parseInt(document.getElementById('y').value) || 0;
    window.scrollTo(x, y);
});

// Scroll up by 10px when the button is clicked
document.getElementById('scrollUp').addEventListener('click', function() {
    window.scrollBy(0, -10);
});

// Scroll down by 10px when the button is clicked
document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollBy(0, 10);
});