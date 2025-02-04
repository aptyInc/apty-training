function scrollUp () {
    window.scrollBy(0, -10);

}

function scrollDown () {
    window.scrollBy(0, 10);
}

function scrollToPosition () {
    const x = document.getElementById("xNumber").value;

    const y = document.getElementById("yNumber").value;

    window.scroll(x,y);
    
}