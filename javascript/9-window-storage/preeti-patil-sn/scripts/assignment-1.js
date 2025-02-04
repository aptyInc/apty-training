// Function to navigate to the entered URL
function navigateToURL() {
  const url = document.getElementById("urlInput").value;
  if (url) {
    window.location.href = url; // Redirect to the entered URL
  } else {
    alert("Please enter a valid URL.");
  }
}

// Function to go back in history
function goBack() {
  window.history.back(); // Go back to the previous page in history
}

// Function to go forward in history
function goForward() {
  window.history.forward(); // Go forward to the next page in history
}

// Function to reload the current page
function reloadPage() {
  window.location.reload(); // Reload the current page
}
