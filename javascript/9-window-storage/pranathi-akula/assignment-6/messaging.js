const iframe = document.getElementById('childIframe');

function sendMessageToIframe() {
  const message = document.getElementById('messageToIframe').value;
  iframe.contentWindow.postMessage(message, '*');
}

window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return; 
  document.getElementById('messageFromIframe').textContent = event.data;
});
