const iframe = document.getElementById('iframe');
const sendButton = document.getElementById('send');

sendButton.onclick = function() {
    const message = document.getElementById('message').value;
    iframe.contentWindow.postMessage(message, '*'); // '*' allows any origin
};
window.addEventListener('message', function(event) {
    console.log('Message received from iframe:', event.data);
});