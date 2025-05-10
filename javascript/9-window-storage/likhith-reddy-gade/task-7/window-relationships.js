let childWindow;

document.getElementById("open-child-btn").addEventListener("click", () => {
  childWindow = window.open(
    "child-window.html",
    "_blank",
    "width=400,height=300"
  );
});

document.getElementById("send-to-child-btn").addEventListener("click", () => {
  if (childWindow) {
    childWindow.postMessage("Hello from Parent", "*");
  } else {
    alert("Child window is not open.");
  }
});

window.addEventListener("message", (event) => {
  document.getElementById(
    "received-from-child"
  ).textContent = `Message from Child: ${event.data}`;
});
