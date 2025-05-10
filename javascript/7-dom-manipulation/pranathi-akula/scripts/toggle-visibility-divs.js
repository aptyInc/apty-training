let currentIndex = 0;

document.getElementById("toggleButton").addEventListener("click", function () {
  const divs = [
    document.getElementById("div1"),
    document.getElementById("div2"),
    document.getElementById("div3"),
  ];

  divs.forEach((div) => (div.style.display = "none"));
  divs[currentIndex].style.display = "block";
  currentIndex = (currentIndex + 1) % divs.length;
});
