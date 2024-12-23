function setCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    if (name && value) {
      document.cookie = `${name}=${value}; path=/`;  
      alert("Cookie set!");
    }
  }

  function readCookie() {
    const name = document.getElementById("cookieName").value;
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        document.getElementById("cookieResult").textContent = `Cookie Value: ${value}`;
        return;
      }
    }
    document.getElementById("cookieResult").textContent = "Cookie not found.";
  }

 
  function deleteCookie() {
    const name = document.getElementById("cookieName").value;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;  
    alert("Cookie deleted!");
  }

  function readAllCookies() {
    const cookies = document.cookie.split("; ");
    let allCookies = "";
    for (let cookie of cookies) {
      allCookies += `${cookie}<br>`;
    }
    document.getElementById("cookieResult").innerHTML = allCookies || "No cookies found.";
  }