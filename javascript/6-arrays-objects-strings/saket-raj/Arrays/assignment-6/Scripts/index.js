function spliceArray() {
  const colors = ["Red", "Blue", "Green", "Yellow"];

  const blueIndex = colors.indexOf("Blue");
  if (blueIndex !== -1) {
    colors.splice(blueIndex, 1, "Purple");
  }

  const greenIndex = colors.indexOf("Green");
  if (greenIndex !== -1) {
    colors.splice(greenIndex, 1);
  }

  const yellowIndex = colors.indexOf("Yellow");
  if (yellowIndex !== -1) {
    colors.splice(yellowIndex + 1, 0, "Orange");
  }

  document.getElementById("result").innerText = `Final array: [${colors.join(
    ", "
  )}]`;
}
