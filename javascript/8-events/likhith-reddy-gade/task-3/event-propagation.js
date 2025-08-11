document.addEventListener("DOMContentLoaded", () => {
  const level1 = document.getElementById("level-1");
  const level2 = document.getElementById("level-2");
  const level3 = document.getElementById("level-3");

  // Capture phase listener (true flag enables capturing)
  level1.addEventListener(
    "click",
    (event) => {
      alert("Capture Phase: Level 1");
    },
    true
  );

  // Bubble phase listener (default is bubbling phase)
  level2.addEventListener("click", (event) => {
    alert("Bubble Phase: Level 2");
  });

  // Target phase listener (happens when the event directly hits the target)
  level3.addEventListener("click", (event) => {
    alert("Target Phase: Level 3");
  });

  // Add optional demonstration of stopping propagation (if needed)
  level3.addEventListener("click", (event) => {
    console.log("Optional: You can stop propagation here.");
  });
});
