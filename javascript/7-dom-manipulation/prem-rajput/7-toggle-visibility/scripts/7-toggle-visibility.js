let currentIndex = 1;

function toggleDivs() {
    const divs = document.querySelectorAll(".box");
    divs.forEach((div, index) => {
        div.classList.toggle("hidden", index !== currentIndex);
    });

    currentIndex = (currentIndex + 1) % divs.length;
}
