function sendMessageToParent() {
    const message = document.getElementById('messageToParent').value;
    window.parent.postMessage(message, '*');
  }
  
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    document.getElementById('messageFromParent').textContent = event.data;
  });
  