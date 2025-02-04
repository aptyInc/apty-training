const firstDivElement = document.getElementById("firstDiv");
const secondDivElement = document.getElementById("secondDiv");
const thirdDivElement = document.getElementById("thirdDiv");

//capturing --- true as third argument
firstDivElement.addEventListener(
  "click",
  () => {
    alert("Level 1 (Capture Phase)");
  },
  true
);

//bubbling by default it is  set to false

secondDivElement.addEventListener("click", () => {
  alert("Level 2 (Target Phase)");
});

thirdDivElement.addEventListener("click", () => {
  alert("Level 3 (Bubbling Phase)");
});
