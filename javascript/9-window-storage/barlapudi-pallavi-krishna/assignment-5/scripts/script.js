function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  return null;
}
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function setMyCookie() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  setCookie(name, value, 7);
  document.getElementById("output").innerText = `Cookie "${name}" set!`;
}
function readMyCookie() {
  const name = document.getElementById("cookieName").value;
  const value = getCookie(name);
  document.getElementById("output").innerText = value ? 
    `Cookie Value: ${value}` : `Cookie "${name}" not found.`;
}
function deleteMyCookie() {
  const name = document.getElementById("cookieName").value;
  deleteCookie(name);
  document.getElementById("output").innerText = `Cookie "${name}" deleted!`;
}
