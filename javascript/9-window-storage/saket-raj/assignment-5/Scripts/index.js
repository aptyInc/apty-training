function setCookie() {
  let name = document.getElementById("cookieName").value;
  let value = document.getElementById("cookieValue").value;
  let days = document.getElementById("cookieDays").value;
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
  document.getElementById("output").textContent = "Cookie set!";
}

function getCookie() {
  document.getElementById("output").textContent = document.cookie;
}

function deleteCookie() {
  let name = document.getElementById("cookieName").value;
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  document.getElementById("output").textContent = "Cookie deleted!";
}
