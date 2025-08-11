const keydownDiv = document.getElementById('keydownOutput');
const keyupDiv = document.getElementById('keyupOutput');

window.addEventListener('keydown', (event) => {
    const keys = [];
    if (event.ctrlKey) keys.push('Ctrl');
    if (event.altKey) keys.push('Alt');
    if (event.shiftKey) keys.push('Shift');
    keys.push(event.key);

    keydownDiv.textContent = `Keydown: ${keys.join('+')}`;
});

window.addEventListener('keyup', (event) => {
    const keys = [];
    if (event.ctrlKey) keys.push('Ctrl');
    if (event.altKey) keys.push('Alt');
    if (event.shiftKey) keys.push('Shift');
    keys.push(event.key);

    keyupDiv.textContent = `Keyup: ${keys.join('+')}`;
});