function setCookie() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  if (name && value) {
    document.cookie = `${name}=${value}; path=/;`;
    alert("Cookie set successfully!");
    displayCookies();
  } else {
    alert("Please provide both a name and a value.");
  }
}

// Function to read a cookie
function readCookie() {
  const name = document.getElementById("cookieToRead").value;
  if (!name) {
    alert("Please provide a cookie name to read.");
    return;
  }
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, val] = cookie.split("=");
    acc[key] = val;
    return acc;
  }, {});
  if (cookies[name]) {
    alert(`Cookie Value: ${cookies[name]}`);
  } else {
    alert("Cookie not found.");
  }
}

// Function to delete a cookie
function deleteCookie() {
  const name = document.getElementById("cookieToDelete").value;
  if (!name) {
    alert("Please provide a cookie name to delete.");
    return;
  }
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  alert("Cookie deleted successfully!");
  displayCookies();
}

// Function to display all cookies
function displayCookies() {
  const cookiesOutput = document.getElementById("cookiesOutput");
  if (document.cookie) {
    cookiesOutput.textContent = document.cookie;
  } else {
    cookiesOutput.textContent = "No cookies to display.";
  }
}

// Display cookies on page load
displayCookies();
