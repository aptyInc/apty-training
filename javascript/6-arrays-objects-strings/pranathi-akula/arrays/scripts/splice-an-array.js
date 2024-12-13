function spliceanArray() {
  const colors = ["Red", "Blue", "Green", "Yellow"];
  colors.splice(1, 1, "Purple");
  colors.splice(4, 0, "Orange");
  colors.splice(2, 1);
  document.getElementById("result").textContent = `[${colors.join(", ")}]`;
}
