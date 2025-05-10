function navigate() {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (urlInput.trim() === '') {
      resultDiv.textContent = 'Please enter a valid URL.';
      return;
    }

    try {
      new URL(urlInput); 
      window.location.href = urlInput; 
    } catch (error) {
      resultDiv.textContent = 'Invalid URL. Please try again.';
    }
  }

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      document.getElementById('result').textContent = 'No page to go back to.';
    }
  }

  function goForward() {
    window.history.forward();
  }

  function reloadPage() {
    window.location.reload();
  }