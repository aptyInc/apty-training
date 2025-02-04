const iframe1 = document.getElementById("iframe1");
const iframe1Doc = iframe1.contentDocument || iframe1.contentWindow.document;
iframe1Doc.open();
iframe1Doc.write(`
            <!DOCTYPE html>
            <html>
            <head><title>Iframe 1</title></head>
            <body>
                <h1>Iframe 1</h1>
                <p id="message1">Waiting for message...</p>
                <button id="sendMessage1">Send message to Iframe 2</button>
            </body>
            </html>
        `);
iframe1Doc.close();

const iframe2 = document.getElementById("iframe2");
const iframe2Doc = iframe2.contentDocument || iframe2.contentWindow.document;
iframe2Doc.open();
iframe2Doc.write(`
            <!DOCTYPE html>
            <html>
            <head><title>Iframe 2</title></head>
            <body>
                <h1>Iframe 2</h1>
                <p id="message2">Waiting for message...</p>
                <button id="sendMessage2">Send message to Iframe 1</button>
            </body>
            </html>
        `);
iframe2Doc.close();

iframe1.onload = function () {
    console.log("Iframe 1 is loaded.");
    iframe2.onload = function () {
        console.log("Iframe 2 is loaded.");
        // Send initial messages after both iframes are loaded
        iframe1.contentWindow.postMessage('Hello from Parent to Iframe 1!', window.location.origin);
        iframe2.contentWindow.postMessage('Hello from Parent to Iframe 2!', window.location.origin);
    };
};

window.addEventListener('message', function (event) {

    const data = event.data;
    console.log("Received message:", data);

   
    if (event.source === iframe1.contentWindow) {
        console.log("Forwarding message from iframe1 to iframe2");
        iframe2.contentWindow.postMessage('Message from iframe1: ' + data, window.location.origin);
    }
    
    else if (event.source === iframe2.contentWindow) {
        console.log("Forwarding message from iframe2 to iframe1");
        iframe1.contentWindow.postMessage('Message from iframe2: ' + data, window.location.origin);
    }
});

// Allow Iframe 1 to send messages to Iframe 2
iframe1Doc.getElementById("sendMessage1").addEventListener("click", () => {
    const message = 'Hello from Iframe 1!';
    console.log("Sending message from Iframe 1 to Iframe 2:", message);
    iframe2.contentWindow.postMessage(message, window.location.origin);  
});

// Allow Iframe 2 to send messages to Iframe 1
iframe2Doc.getElementById("sendMessage2").addEventListener("click", () => {
    const message = 'Hello from Iframe 2!';
    console.log("Sending message from Iframe 2 to Iframe 1:", message);
    iframe1.contentWindow.postMessage(message, window.location.origin);  
});