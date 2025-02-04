const firstContainer = document.getElementById("firstContainer");
const secondContainer = document.getElementById("secondContainer");
const thirdContainer = document.getElementById("thirdContainer");

const sectionElements = document.querySelectorAll("section");

firstContainer.addEventListener("click", () => {
  secondContainer.classList.toggle("hide");
  thirdContainer.classList.toggle("hide");
});

secondContainer.addEventListener("click", () => {
  firstContainer.classList.toggle("hide");
  thirdContainer.classList.toggle("hide");
});

thirdContainer.addEventListener("click", () => {
  firstContainer.classList.toggle("hide");
  secondContainer.classList.toggle("hide");
});
