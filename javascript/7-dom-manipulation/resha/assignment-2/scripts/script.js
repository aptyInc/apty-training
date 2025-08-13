const keydownDiv = document.getElementById('keydownDiv');
const keyupDiv = document.getElementById('keyupDiv');

function getKeyCombo(e) {
    let keys = [];
    if (e.ctrlKey) keys.push('Ctrl');
    if (e.shiftKey) keys.push('Shift');
    if (e.altKey) keys.push('Alt');
    if (e.metaKey) keys.push('Meta');
    if (!['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) {
        keys.push(e.key);
    }
    return keys.join(' + ');
}

window.addEventListener('keydown', function(e) {
    const combo = getKeyCombo(e);
    keydownDiv.textContent += combo + '\n';
});

window.addEventListener('keyup', function(e) {
    const combo = getKeyCombo(e);
    keyupDiv.textContent += combo + '\n';
});
