const keydownLog = document.getElementById('keydownLog');
const keyupLog = document.getElementById('keyupLog');
function getKeyCombo(e) {
  let combo = [];
  if (e.ctrlKey) combo.push('Ctrl');
  if (e.shiftKey) combo.push('Shift');
  if (e.altKey) combo.push('Alt');
  if (e.metaKey) combo.push('Meta');
  combo.push(e.key);
  return combo.join(' + ');
}
function logEvent(logDiv, text) {
  const el = document.createElement('div');
  el.className = 'event';
  el.textContent = text;
  logDiv.prepend(el);
}
window.addEventListener('keydown', (e) => {
  logEvent(keydownLog, `Keydown: ${getKeyCombo(e)}`);
});
window.addEventListener('keyup', (e) => {
  logEvent(keyupLog, `Keyup: ${getKeyCombo(e)}`);
});