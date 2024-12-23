const iframe1 = document.getElementById('iframe1').contentWindow;
const iframe2 = document.getElementById('iframe2').contentWindow;

window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) return;
    console.log('Received message: ', event.data);
});

function sendMessageToIframe1() {
    iframe1.postMessage('Hello from parent to iframe1', window.location.origin);
}

function sendMessageToIframe2() {
    iframe2.postMessage('Hello from parent to iframe2', window.location.origin);
}
