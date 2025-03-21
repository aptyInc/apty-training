const keydownText = document.getElementById('keydown-text');
const keyupText = document.getElementById('keyup-text');

window.addEventListener('keydown', function(event) {
    let keyInfo = `Key: ${event.key}, `;
    if (event.ctrlKey) keyInfo += 'Ctrl+';
    if (event.shiftKey) keyInfo += 'Shift+';
    if (event.altKey) keyInfo += 'Alt+';

    keydownText.textContent = keyInfo + event.key;
});

window.addEventListener('keyup', function(event) {
    let keyInfo = `Key: ${event.key}, `;
    if (event.ctrlKey) keyInfo += 'Ctrl+';
    if (event.shiftKey) keyInfo += 'Shift+';
    if (event.altKey) keyInfo += 'Alt+';

    keyupText.textContent = keyInfo + event.key;
});
