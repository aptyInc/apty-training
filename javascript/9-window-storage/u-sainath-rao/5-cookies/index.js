const setCookieButton = document.getElementById("setCookie");
const getCookieButton = document.getElementById("getCookie");
const deleteCookieButton = document.getElementById("deleteCookie");
const cookieResult = document.getElementById("cookieResult");

setCookieButton.addEventListener("click", () => {
	const name = document.getElementById("cookieName").value;
	const value = document.getElementById("cookieValue").value;
	setCookie(name, value, 7); // Set cookie with 7 days expiration
});

getCookieButton.addEventListener("click", () => {
	const name = document.getElementById("getCookieName").value;
	const value = getCookie(name);
	cookieResult.textContent = value
		? `Cookie Value: ${value}`
		: "Cookie not found.";
});

deleteCookieButton.addEventListener("click", () => {
	const name = document.getElementById("deleteCookieName").value;
	deleteCookie(name);
	cookieResult.textContent = `Cookie "${name}" deleted.`;
});

// Set a cookie
function setCookie(name, value, days) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Get a cookie
function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

// Delete a cookie
function deleteCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
