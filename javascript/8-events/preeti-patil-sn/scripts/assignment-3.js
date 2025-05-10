// References to the div elements
const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");

// Event listener for Level 1 (Capture Phase)
level1.addEventListener(
  "click",
  () => {
    alert("Level 1 - Capture Phase");
  },
  true // Enable capture phase
);

// Event listener for Level 2 (Bubble Phase)
level2.addEventListener(
  "click",
  () => {
    alert("Level 2 - Bubble Phase");
  },
  false // Bubble phase (default behavior)
);

// Event listener for Level 3 (Target Phase)
level3.addEventListener("click", () => {
  alert("Level 3 - Target Phase");
});
