// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`; // Set the cookie
}

// Function to read a cookie
function readCookie(name) {
  const cookies = document.cookie.split("; "); // Split cookies into key-value pairs
  for (const cookie of cookies) {
    const [key, value] = cookie.split("="); // Split each cookie into name and value
    if (key === name) {
      return value; // Return the value if the name matches
    }
  }
  return null; // Return null if the cookie is not found
}

// Function to delete a cookie
function deleteCookie(name) {
  setCookie(name, "", -1); // Set the cookie with a past expiry date to delete it
}

// Add event listeners for buttons
document.getElementById("setCookieBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  const days = parseInt(document.getElementById("cookieExpiry").value, 10) || 1; // Default to 1 day if not provided

  if (name && value) {
    setCookie(name, value, days);
    document.getElementById(
      "output"
    ).textContent = `Cookie "${name}" has been set.`;
  } else {
    document.getElementById("output").textContent =
      "Please provide both name and value.";
  }
});

document.getElementById("readCookieBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;

  if (name) {
    const value = readCookie(name);
    if (value) {
      document.getElementById(
        "output"
      ).textContent = `Cookie "${name}" has value: ${value}`;
    } else {
      document.getElementById(
        "output"
      ).textContent = `Cookie "${name}" not found.`;
    }
  } else {
    document.getElementById("output").textContent =
      "Please provide the cookie name to read.";
  }
});

document.getElementById("deleteCookieBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;

  if (name) {
    deleteCookie(name);
    document.getElementById(
      "output"
    ).textContent = `Cookie "${name}" has been deleted.`;
  } else {
    document.getElementById("output").textContent =
      "Please provide the cookie name to delete.";
  }
});
