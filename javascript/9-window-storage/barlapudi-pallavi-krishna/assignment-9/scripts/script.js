let myWindow;

function openWindow() {
  myWindow = window.open("", "newWin", "width=300,height=200");
  if (myWindow) {
    myWindow.document.write("<h3>This is a new window</h3>");
  }
}

function resizeWindow() {
  if (myWindow && !myWindow.closed) {
    myWindow.resizeTo(500, 400); 
  }
}

function closeWindow() {
  if (myWindow && !myWindow.closed) {
    myWindow.close();
  }
}
