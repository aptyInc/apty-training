function sendMessageToTop() {
    const message = document.getElementById('messageToTop').value;
    window.top.postMessage(message, '*');
    logMessage('Sent to Top Window: ' + message);
  }

  function sendMessageToIframe() {
    const message = document.getElementById('messageToIframe').value;
    const iframe = document.getElementById('childIframe').contentWindow;
    iframe.postMessage(message, '*');
    logMessage('Sent to Iframe: ' + message);
  }

  window.addEventListener('message', (event) => {
    logMessage('From Iframe or Top Window: ' + event.data);
  });

  function logMessage(message) {
    const messageLogs = document.getElementById('messageLogs');
    messageLogs.innerHTML += '<p>' + message + '</p>';
  }