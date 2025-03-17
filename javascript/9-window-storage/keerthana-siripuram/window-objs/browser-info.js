document.getElementById('my-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const url = document.getElementById('url').value;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    alert('Please enter a valid URL starting with "http://" or "https://".');
    return;
  }
  window.location.href = url;
})


document.getElementById("backButton").addEventListener('click', function () {
  window.history.back();
});


document.getElementById("forwardButton").addEventListener('click', function () {
  window.history.forward();
});


document.getElementById("reloadButton").addEventListener('click', function () {
  window.location.reload();
})

