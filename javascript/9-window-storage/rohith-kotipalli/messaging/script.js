const iframe = document.getElementById('childIframe').contentWindow;

    function sendMessageToIframe() {
      const message = document.getElementById('messageInput').value;
      iframe.postMessage(message, '*');

      const messageLogs = document.getElementById('messageLogs');
      messageLogs.innerHTML += '<p>Sent to iframe: ' + message + '</p>';
    }

    window.addEventListener('message', (event) => {
      const messageLogs = document.getElementById('messageLogs');
      messageLogs.innerHTML += '<p>From iframe: ' + event.data + '</p>';
    });