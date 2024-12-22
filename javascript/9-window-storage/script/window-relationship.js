// For the Main Window
if (window === window.top) {
    const sendMessageButton = document.getElementById('sendMessage');
    const iframe = document.getElementById('iframe');

    sendMessageButton.addEventListener('click', () => {
        const message = 'Hello from the main window!';
        iframe.contentWindow.postMessage(message, '*');
    });

    window.addEventListener('message', (event) => {
        document.getElementById('result').innerText = `Message received from iframe: ${event.data}`;
        console.log('Message received from iframe:', event.data);
    });
}

// For the Iframe
if (window !== window.top) {
    const sendBackButton = document.getElementById('sendBack');
    const resultDiv = document.getElementById('result');

    sendBackButton.addEventListener('click', () => {
        const message = 'Hello from the iframe!';
        parent.postMessage(message, '*');
    });

    window.addEventListener('message', (event) => {
        resultDiv.innerText = `Message received from parent: ${event.data}`;
        console.log('Message received from parent:', event.data);
    });
}
