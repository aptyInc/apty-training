
if (window === window.top) {
    const iframe1 = document.getElementById('iframe1').contentWindow;
    const iframe2 = document.getElementById('iframe2').contentWindow;

    window.addEventListener('message', (event) => {
        if (event.source === iframe1) {
            iframe2.postMessage(event.data, '*');
        } else if (event.source === iframe2) {
            iframe1.postMessage(event.data, '*');
        }
    });
}

if (window !== window.top) {
    const isIframe1 = window.location.href.includes('iframe1');
    const resultDiv = document.getElementById('result');

    if (isIframe1) {
        const sendButton = document.getElementById('sendToIframe2');
        sendButton.addEventListener('click', () => {
            const message = 'Hello from Iframe 1!';
            parent.postMessage(message, '*');
        });
    }

    window.addEventListener('message', (event) => {
        resultDiv.innerText = `Message received: ${event.data}`;
    });
}
