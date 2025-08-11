const height = document.querySelector("#height");

const width = document.querySelector("#width");

const screenHeight = document.querySelector("#screenHeight");
const screenWidth = document.querySelector("#screenWidth");

const colorDepth = document.querySelector("#colorDepth");

function windowSize () {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;

    screenHeight.textContent = screen.height;

    screenWidth.textContent = screen.width;
    colorDepth.textContent = screen.colorDepth;
}

window.onresize = windowSize();


