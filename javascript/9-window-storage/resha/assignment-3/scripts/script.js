const scroll = document.getElementById("scroll");
const up = document.getElementById("scrollUp");
const down = document.getElementById("scrollDown");

scroll.addEventListener("click", () => {
    const x = Number(document.getElementById("xInput").value);
    const y = Number(document.getElementById("yInput").value);
    window.scrollTo(x, y);
})

down.addEventListener("click", () => {
    window.scrollBy(0, 10);
})

up.addEventListener("click", () => {
    window.scrollBy(0, -10);
})
