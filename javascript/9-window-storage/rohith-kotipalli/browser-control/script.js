let newWindow = null;

function openWindow() {
  if (!newWindow || newWindow.closed) {
    newWindow = window.open('', 'newWindow', 'width=600,height=400');
    logMessage('New window opened with default size (600x400).');
  } else {
    logMessage('Window is already open.');
  }
}

function closeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    logMessage('Window closed.');
  } else {
    logMessage('No window is open to close.');
  }
}

function resizeWindow() {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;

  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(width, height);
    logMessage(`Window resized to ${width}x${height}.`);
  } else {
    logMessage('No window is open to resize.');
  }
}

function logMessage(message) {
  const messageLogs = document.getElementById('messageLogs');
  messageLogs.innerHTML += `<p>${message}</p>`;
}