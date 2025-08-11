const iframe = document.getElementById('childIframe');

function sendMessageToIframe() {
  const message = document.getElementById('messageToIframe').value;
  iframe.contentWindow.postMessage({ from: 'parent', message }, '*');
}

window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return; 
  const data = event.data;
  if (data.from === 'iframe') {
    document.getElementById('messageFromIframe').textContent = data.message;
  }
});
