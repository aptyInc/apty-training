const keyDownDivision = document.getElementById("keyDownDivision");
const keyUpDivison = document.getElementById("keyUpDivison");

function appendEvent(division, event, type) {
  console.log(event.code);
  const combinations = [];

  if (event.ctrlKey) {
    combinations.push("Ctrl");
  }

  if (event.shiftKey) {
    combinations.push("Shift");
  }

  if (event.altKey) {
    combinations.push("Alt");
  }

  const key = event.key.length === 1 ? event.key.toUpperCase() : event.key; // Implementing nested Ternary Operator for checking space

  const combinationString =
    combinations.length > 0
      ? combinations.join(" + ") + " + " + key
      : event.code === "Space"
      ? "Space"
      : key;

  const p = document.createElement("p");
  p.textContent = `${type}: ${combinationString}`;
  division.appendChild(p);
}

window.addEventListener("keydown", (event) => {
  appendEvent(keyDownDivision, event, "Keydown");
});

window.addEventListener("keyup", (event) => {
  appendEvent(keyUpDivison, event, "Keyup");
});
