document.getElementById('sendMessage').addEventListener('click', function () {
    window.opener.postMessage('Hello from Child', window.location.origin);
});

window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) {
        return;
    }

    document.getElementById('messageFromParent').textContent = 'Message from Parent: ' + event.data;
});
