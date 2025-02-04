const content = document.getElementById("content");
const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const scrollToBtn = document.getElementById("scrollToBtn");
const scrollUpBtn = document.getElementById("scrollUpBtn");
const scrollDownBtn = document.getElementById("scrollDownBtn");

scrollToBtn.addEventListener("click", () => {
    const x = parseInt(xInput.value, 10) || 0;
    const y = parseInt(yInput.value, 10) || 0;
    content.scrollTo(x, y);
});

scrollUpBtn.addEventListener("click", () => {
    content.scrollBy(0, -10);
});

scrollDownBtn.addEventListener("click", () => {
    content.scrollBy(0, 10);
});