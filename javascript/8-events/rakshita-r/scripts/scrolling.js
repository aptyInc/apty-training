// Function to scroll to a specific position
function scrollToPosition() {
  const x = parseInt(document.getElementById("xInput").value, 10) || 0;
  const y = parseInt(document.getElementById("yInput").value, 10) || 0;

  window.scrollTo(x, y);
  updateScrollPosition(); // Update displayed scroll position
}

// Function to scroll up or down by 10px
function scrollByAmount(x, y) {
  window.scrollBy(x, y);
  updateScrollPosition(); // Update displayed scroll position
}

// Function to update the scroll position output
function updateScrollPosition() {
  document.getElementById("currentX").textContent = window.scrollX;
  document.getElementById("currentY").textContent = window.scrollY;
}

// Initialize display with current scroll position
updateScrollPosition();
