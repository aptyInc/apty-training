function setCookie() {
    const name = document.getElementById("cookieName").value.trim();
    const value = document.getElementById("cookieValue").value.trim();

    if (name === "" || value === "") {
      alert("Please enter both cookie name and value.");
      return;
    }

    const expires = new Date();
    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); 
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;

    document.getElementById("cookieName").value = "";
    document.getElementById("cookieValue").value = "";
    displayOutput(`Cookie "${name}" set successfully!`);
  }

  function readCookies() {
    const cookies = document.cookie;
    if (cookies === "") {
      displayOutput("No cookies found.");
    } else {
      const cookieList = cookies.split("; ").map((cookie) => `<li>${cookie}</li>`).join("");
      displayOutput(`<ul>${cookieList}</ul>`);
    }
  }

  function deleteCookie() {
    const name = document.getElementById("deleteCookieName").value.trim();

    if (name === "") {
      alert("Please enter the cookie name to delete.");
      return;
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    document.getElementById("deleteCookieName").value = "";
    displayOutput(`Cookie "${name}" deleted successfully!`);
  }

  function displayOutput(message) {
    document.getElementById("cookieList").innerHTML = message;
  }