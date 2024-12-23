const iframe1 = document.getElementById("iframe1").contentWindow;
const iframe2 = document.getElementById("iframe2").contentWindow;

window.addEventListener("message", (event) => {
  if (event.source === iframe1) {
    iframe2.postMessage(event.data, "*");
  } else if (event.source === iframe2) {
    iframe1.postMessage(event.data, "*");
  }
});
