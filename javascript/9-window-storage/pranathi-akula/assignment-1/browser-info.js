function navigateToUrl() {
    const url = document.getElementById('url').value;
    if (url) {
      window.location.href = url;
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
  