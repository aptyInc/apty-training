let newWindow;

function openWindow() {
  newWindow = window.open("", "_blank", "width=500,height=500");

  if (newWindow) {
    const heading = newWindow.document.createElement("h1");
    heading.textContent = "New Window";
    newWindow.document.body.appendChild(heading);
  }
}

function closeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
  }
}

function resizeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(800, 600);
  }
}
