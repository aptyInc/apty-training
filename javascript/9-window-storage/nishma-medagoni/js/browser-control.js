let newWindow;

function openWindow() {
  newWindow = window.open("", "", "width=400,height=400");
  if (newWindow) {
    newWindow.document.write(
      "<h1>New Window</h1><p>You can control this window from the main page.</p>"
    );
  } else {
    alert("Popup blocked! Please allow popups for this site.");
  }
}

// Function to close the new window
function closeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
  } else {
    alert("No window to close!");
  }
}

// Function to resize the new window
function resizeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(600, 600);
    newWindow.focus();
  } else {
    alert("No window to resize!");
  }
}
