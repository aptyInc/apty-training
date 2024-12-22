 window.addEventListener('keydown', function(event) {
    document.getElementById('keydowndiv').innerText = 'Keydown: ' + event.key;
});

window.addEventListener('keyup', function(event) {
    document.getElementById('keyupdiv').innerText = 'Keyup: ' + event.key;
});