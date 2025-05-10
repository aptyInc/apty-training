document.querySelector(".level1").addEventListener(
  "click",
  (event) => {
    alert("Level 1 (Capture Phase)");
  },
  true
);

document.querySelector(".level2").addEventListener(
  "click",
  (event) => {
    alert("Level 2 (Bubble Phase)");
  },
  false
);

document.querySelector(".level3").addEventListener("click", (event) => {
  alert("Level 3 (Target Phase)");
});
