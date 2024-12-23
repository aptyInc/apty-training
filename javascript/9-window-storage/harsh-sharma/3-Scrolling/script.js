function scrollToPosition() {
    const x = document.getElementById('scrollX').value;
    const y = document.getElementById('scrollY').value;
    window.scrollTo(x, y);
}

function scrollUp() {
    window.scrollBy(0, -10);
}

function scrollDown() {
    window.scrollBy(0, 10);
}
