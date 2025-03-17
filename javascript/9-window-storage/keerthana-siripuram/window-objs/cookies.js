function setCookie() {
    let name = document.getElementById("name").value
    let value = document.getElementById("value").value
    let days = document.getElementById("days").value
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie() {
    let name = document.getElementById("name").value
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function readCookie() {
    let name = document.getElementById("name").value + "="
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            let cookieValue = c.substring(name.length, c.length)
            document.getElementById("output").innerText = `Cookie value is ${cookieValue}`
            return
        }
    }
    document.getElementById("output").innerText = "Cookie not found"
}