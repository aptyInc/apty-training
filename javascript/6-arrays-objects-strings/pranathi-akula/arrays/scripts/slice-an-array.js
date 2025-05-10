function sliceanArray() {
  const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
  const firstThreeElements = names.slice(0, 3);
  const lastTwoElements = names.slice(-2);
  document.getElementById("firstThreeElements").textContent =
    firstThreeElements.join(", ");
  document.getElementById("lastTwoElements").textContent =
    lastTwoElements.join(", ");
}
