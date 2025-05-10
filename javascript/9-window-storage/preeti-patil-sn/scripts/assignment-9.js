let newWindow = null;

// Get button elements
const openButton = document.getElementById("openWindow");
const resizeButton = document.getElementById("resizeWindow");
const closeButton = document.getElementById("closeWindow");

// Open a new browser window
openButton.addEventListener("click", () => {
  if (!newWindow || newWindow.closed) {
    newWindow = window.open(
      "",
      "_blank",
      "width=400,height=300,top=100,left=100"
    );
    newWindow.document.write(
      "<h1>Controlled Window</h1><p>This is a new window.</p>"
    );
    resizeButton.disabled = false;
    closeButton.disabled = false;
  } else {
    alert("The window is already open!");
  }
});

// Resize the opened browser window
resizeButton.addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(600, 400);
    newWindow.moveTo(200, 200);
  } else {
    alert("Please open the window first.");
  }
});

// Close the opened browser window
closeButton.addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    resizeButton.disabled = true;
    closeButton.disabled = true;
  } else {
    alert("The window is already closed!");
  }
});
