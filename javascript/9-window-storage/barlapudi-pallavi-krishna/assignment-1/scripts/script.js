function goToUrl() {
  const url = document.getElementById('urlInput').value.trim();
  if (url) {
    const fullUrl = url.startsWith('http') ? url : 'https://' + url;
    window.location.href = fullUrl;
  } else {
    alert("Please enter a URL.");
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
