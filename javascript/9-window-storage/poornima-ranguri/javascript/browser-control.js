let newWindow;

document
  .getElementById("openWindow")
  .addEventListener("click", () => [
    (newWindow = window.open(
      "",
      "Controlled Window by me",
      "Width=400, height=400, top=100, left=100"
    )),
  ]);

document.getElementById("openWindow").addEventListener("click", () => {
  newWindow = window.open(
    "",
    "ControlledWindow",
    "width=400,height=400,top=300,left=100"
  );
  if (newWindow) {
    newWindow.document.write("<h1>Welcome to the New Window</h1>");
    newWindow.document.write(
      "<p>You can control this window from the main window.</p>"
    );
    document.getElementById("closeWindow").disabled = false;
    document.getElementById("resizeWindow").disabled = false;
  } else {
    alert("Pop-up blocked! Please allow pop-ups for this website.");
  }
});

document.getElementById("closeWindow").addEventListener("click", () => {
  newWindow.close();
});

document.getElementById("resizeWindow").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(600, 600);
    newWindow.focus();
  } else {
    alert("The window is not open or already closed!");
  }
});
