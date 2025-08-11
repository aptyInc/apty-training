document.getElementById("navigate-btn").addEventListener("click", () => {
  const url = document.getElementById("url-input").value;
  if (url) {
    window.location.href = url.startsWith("http") ? url : `https://${url}`;
  } else {
    alert("Please enter a valid URL.");
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  window.history.back();
});

document.getElementById("forward-btn").addEventListener("click", () => {
  window.history.forward();
});

document.getElementById("reload-btn").addEventListener("click", () => {
  window.location.reload();
});
