// Utility function to sanitize user inputs
function sanitize(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}

// Error handler for Fetch API
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error.message);
    alert("Failed to load data. Please try again later.");
  }
}
