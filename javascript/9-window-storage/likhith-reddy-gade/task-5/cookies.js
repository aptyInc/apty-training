// Set a cookie
document.getElementById("set-cookie-btn").addEventListener("click", () => {
  const name = document.getElementById("cookie-name").value;
  const value = document.getElementById("cookie-value").value;
  if (name && value) {
    document.cookie = `${name}=${value};path=/;`;
    alert(`Cookie "${name}" set successfully.`);
  } else {
    alert("Please enter both cookie name and value.");
  }
});

// Read a cookie
document.getElementById("read-cookie-btn").addEventListener("click", () => {
  const name = document.getElementById("read-cookie-name").value;
  const cookies = document.cookie.split("; ").reduce((acc, curr) => {
    const [key, val] = curr.split("=");
    acc[key] = val;
    return acc;
  }, {});
  document.getElementById("read-cookie-output").textContent = cookies[name]
    ? `Value: ${cookies[name]}`
    : "Cookie not found.";
});

// Delete a cookie
document.getElementById("delete-cookie-btn").addEventListener("click", () => {
  const name = document.getElementById("delete-cookie-name").value;
  if (name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert(`Cookie "${name}" deleted.`);
  } else {
    alert("Please enter the cookie name to delete.");
  }
});
