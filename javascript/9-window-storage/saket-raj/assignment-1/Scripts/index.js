function goForward() {
  const url = document.getElementById("link").value.trim();
  if (url !== "nextpage.html") alert("Please enter a valid url");
  else location.href = url;
}

function reloadPage() {
  location.reload();
}
