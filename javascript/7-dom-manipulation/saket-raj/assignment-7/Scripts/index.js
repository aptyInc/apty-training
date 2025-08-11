const divs = document.querySelectorAll(".box");
let currentIndex = 0;

divs[currentIndex].style.display = "flex";

document.getElementById("toggleBtn").addEventListener("click", () => {
  // hide curr div
  divs[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % divs.length;

  divs[currentIndex].style.display = "flex";
});
