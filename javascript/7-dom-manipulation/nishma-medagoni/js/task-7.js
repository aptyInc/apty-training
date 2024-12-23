let currentDivIndex = 0;

document.getElementById("toggleButton").addEventListener("click", function () {
  const divs = document.querySelectorAll(".toggleDiv")
  const currentDiv = divs[currentDivIndex]

  if (currentDiv.style.display === "none") {
    currentDiv.style.display = "block"
  } else {
    currentDiv.style.display = "none"
  }

  currentDivIndex = (currentDivIndex + 1) % divs.length
})
