function logMessage() {
    let users = document.getElementById("str").value
    let parsedUsers;
    try {
        parsedUsers = JSON.parse(users)
    }
    catch (err) {
        document.getElementById("res").innerText = `${err.message}`
    }
    parsedUsers.forEach((user) => {
        document.getElementById("res").innerHTML += `<br>${user.name} is ${user.age} years`
    })
}