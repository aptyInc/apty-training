// Function to scroll to the given x and y positions
function scrollToPosition() {
  const x = parseInt(document.getElementById("xInput").value, 10) || 0;
  const y = parseInt(document.getElementById("yInput").value, 10) || 0;

  window.scrollTo({
    top: y,
    left: x,
    behavior: "smooth", // Smooth scrolling for better user experience
  });
}

// Function to scroll up by 10px
function scrollUp() {
  window.scrollBy({
    top: -10,
    left: 0,
    behavior: "smooth", // Smooth scrolling for better user experience
  });
}

// Function to scroll down by 10px
function scrollDown() {
  window.scrollBy({
    top: 10,
    left: 0,
    behavior: "smooth", // Smooth scrolling for better user experience
  });
}
