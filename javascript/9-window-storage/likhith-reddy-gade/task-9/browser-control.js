let newWindow;

// Open a new window
document.getElementById("open-window-btn").addEventListener("click", () => {
  newWindow = window.open("", "_blank", "width=400,height=300");
  newWindow.document.write("<h1>New Window</h1>");
});

// Close the new window
document.getElementById("close-window-btn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
  } else {
    alert("No open window to close.");
  }
});

// Resize the new window
document.getElementById("resize-window-btn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(600, 400);
  } else {
    alert("No open window to resize.");
  }
});
