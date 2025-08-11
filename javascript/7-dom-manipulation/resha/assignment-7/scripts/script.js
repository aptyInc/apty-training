const divs = document.querySelectorAll(".myDiv");
const toggle = document.getElementById("toggle");

let i = 0;
toggle.addEventListener("click", function () {
    if (divs[i].style.display === "none") {
        divs[i].style.display = "block"; 
    } else {
        divs[i].style.display = "none"; 
    }
    i++;
    if (i >= divs.length) {
        i = 0;
    }
});