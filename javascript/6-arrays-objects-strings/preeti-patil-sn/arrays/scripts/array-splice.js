function spliceArray() {
  let colors = ["Red", "Blue", "Green", "Yellow"];

  // Replace "Blue" with "Purple" (find index and replace)
  const blueIndex = colors.indexOf("Blue");
  if (blueIndex !== -1) {
    colors[blueIndex] = "Purple";
  }

  // Add "Orange" after "Yellow"
  const yellowIndex = colors.indexOf("Yellow");
  if (yellowIndex !== -1) {
    colors.splice(yellowIndex + 1, 0, "Orange");
  }

  // Remove "Green" without leaving an empty spot
  const greenIndex = colors.indexOf("Green");
  if (greenIndex !== -1) {
    colors.splice(greenIndex, 1);
  }

  // Display the updated array
  document.getElementById("updatedColors").textContent = colors.join(", ");
}
