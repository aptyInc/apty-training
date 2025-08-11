window.addEventListener('message', function(event) {
    const receivedMessage = event.data;
    document.getElementById('received-message').innerText = 'Received: ' + receivedMessage;

    event.source.postMessage('Hello Parent! Message received: ' + receivedMessage, event.origin);
});