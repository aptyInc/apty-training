// Listen for messages from iframe1 or the parent
window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) {
        console.error('Untrusted origin:', event.origin);
        return;
    }

    console.log('Received message from another iframe or parent:', event.data);

    const messageElement = document.getElementById('messageFromIframe2');
    messageElement.textContent = `Message from another window: ${event.data.content}`;

    window.parent.postMessage({ content: 'Hello from iframe 2!' }, window.location.origin);
});

setTimeout(function() {
    const message = { content: 'Hello, Iframe 1!' };
    window.parent.postMessage(message, window.location.origin);
}, 1000);
