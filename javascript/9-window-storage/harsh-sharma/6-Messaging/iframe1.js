window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) {
        console.error('Untrusted origin:', event.origin);
        return;
    }

    console.log('Received message from another iframe or parent:', event.data);

    const messageElement = document.getElementById('messageFromIframe1');
    messageElement.textContent = `Message from another window: ${event.data.content}`;

    // Send a message to the parent to inform it's ready to communicate
    window.parent.postMessage({ content: 'Hello from iframe 1!' }, window.location.origin);
});

// After a delay, send a message to iframe2
setTimeout(function() {
    const message = { content: 'Hello, Iframe 2!' };
    window.parent.postMessage(message, window.location.origin);
}, 1000);
