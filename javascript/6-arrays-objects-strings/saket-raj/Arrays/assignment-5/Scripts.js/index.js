function sliceArray() {
  const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];

  const firstThree = names.slice(0, 3);
  const lastTwo = names.slice(-2);

  document.getElementById(
    "result1"
  ).innerText = `First three: [${firstThree.join(", ")}]`;
  document.getElementById("result2").innerText = `Last two: [${lastTwo.join(
    ", "
  )}]`;
}
