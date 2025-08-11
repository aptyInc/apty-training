let childWindow = null;

document.getElementById('openChild').addEventListener('click', function () {
    childWindow = window.open('child.html', 'Child Window', 'width=400, height=400');
});

window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) {
        return;
    }

    document.getElementById('messageFromChild').textContent = 'Message from Child: ' + event.data;
});

function sendMessageToChild(message) {
    if (childWindow) {
        childWindow.postMessage(message, window.location.origin);
    }
}
