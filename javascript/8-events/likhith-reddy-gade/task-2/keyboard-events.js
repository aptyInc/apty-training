document.addEventListener("DOMContentLoaded", () => {
  const keydownLog = document.getElementById("keydown-log");
  const keyupLog = document.getElementById("keyup-log");

  // Keydown event
  window.addEventListener("keydown", (event) => {
    const keyInfo = formatKeyInfo(event);
    keydownLog.textContent += ` ${keyInfo}`;
  });

  // Keyup event
  window.addEventListener("keyup", (event) => {
    const keyInfo = formatKeyInfo(event);
    keyupLog.textContent += ` ${keyInfo}`;
  });

  function formatKeyInfo(event) {
    const keys = [];
    if (event.ctrlKey) keys.push("Ctrl");
    if (event.shiftKey) keys.push("Shift");
    if (event.altKey) keys.push("Alt");
    keys.push(event.key);
    return `[${keys.join("+")}]`;
  }
});
