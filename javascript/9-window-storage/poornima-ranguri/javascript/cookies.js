const setCookieElement = document.getElementById("set-cookie");
const getCookieElement = document.getElementById("get-cookie");
const deleteCookieElement = document.getElementById("delete-cookie");
const resultElement = document.querySelector("p");

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

setCookieElement.addEventListener("click", () => {
  setCookie("name", "poori", 27);
  resultElement.textContent = "Cookie Set succesfully";
});

deleteCookieElement.addEventListener("click", () => {
  deleteCookie("poori");
  resultElement.textContent = "Cookie Deleted Successfully";
});

getCookieElement.addEventListener("click", () => {
  const cookieValue = getCookie("name");
  if (cookieValue) {
    resultElement.textContent = `Cookie Value: ${cookieValue}`;
  } else {
    resultElement.textContent = "Cookie not found";
  }
});
