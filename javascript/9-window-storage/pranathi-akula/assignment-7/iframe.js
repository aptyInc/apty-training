function sendMessageToParent() {
    const message = document.getElementById('messageToParent').value;
    window.parent.postMessage({ from: 'iframe', message }, '*');
  }
  
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return; 
    const data = event.data;
  
    if (data.from === 'parent') {
      document.getElementById('messageFromParent').textContent = data.message;
    } else if (data.from === 'top') {
      document.getElementById('messageFromTop').textContent = data.message;
    }
  });
  
  if (window.top !== window.parent) {
    window.top.postMessage({ from: 'iframe', message: 'Hello from the iframe!' }, '*');
  }
  