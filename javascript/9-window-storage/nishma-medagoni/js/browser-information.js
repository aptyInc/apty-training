function navigateToURL() {
  const url = document.getElementById("url").value;
  if (url) {
    window.location.href = url;
  } else {
    alert("Please enter a valid URL.");
  }
}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}

function reloadPage() {
  window.location.reload();
}
