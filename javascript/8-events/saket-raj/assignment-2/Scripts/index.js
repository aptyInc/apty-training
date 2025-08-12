const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

function getKeyCombination(e) {
  let keys = [];
  if (e.ctrlKey) keys.push("Ctrl");
  if (e.shiftKey) keys.push("Shift");
  if (e.altKey) keys.push("Alt");
  keys.push(e.key);
  return keys.join("+");
}

window.addEventListener("keydown", (e) => {
  e.preventDefault(); // preventing dft actions for testing
  const combo = getKeyCombination(e);
  keydownDiv.textContent = `Keydown Events: ${combo}`;
});

window.addEventListener("keyup", (e) => {
  e.preventDefault();
  const combo = getKeyCombination(e);
  keyupDiv.textContent = `Keyup Events: ${combo}`;
});
