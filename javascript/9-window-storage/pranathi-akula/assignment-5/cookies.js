function setCookie() {
    const name = document.getElementById('cookieName').value;
    const value = document.getElementById('cookieValue').value;
    const days = document.getElementById('cookieExpiry').value;
  
    if (name && value) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
      alert("Cookie set successfully!");
    } else {
      alert("Please provide both name and value for the cookie.");
    }
  }
  
  function readCookie() {
    const name = document.getElementById('readCookieName').value;
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        document.getElementById('cookieOutput').textContent = cookieValue;
        return;
      }
    }
    document.getElementById('cookieOutput').textContent = "Cookie not found.";
  }
  
  function deleteCookie() {
    const name = document.getElementById('deleteCookieName').value;
    if (name) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      alert("Cookie deleted successfully!");
    } else {
      alert("Please provide the name of the cookie to delete.");
    }
  }
  