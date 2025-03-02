function checkEveryUser() {
    let parsedUsers = parseInput()
    if (parsedUsers.length > 0) {
        const status = parsedUsers.every((user) => user.score > 35)
        status ? document.getElementById("every").innerText = "Every Student Passed"
            : document.getElementById("every").innerText = "Not Every Student Passed"
    }
}
function checkSomeUser() {
    let parsedUsers = parseInput()
    if (parsedUsers.length > 0) {
        const status = parsedUsers.some((user) => user.score < 35)
        status ? document.getElementById("some").innerText = "some Students Failed"
            : document.getElementById("some").innerText = "All Students Passed"
    }
}
function parseInput() {
    let users = document.getElementById("str").value
    let parsedUsers;
    try {
        parsedUsers = JSON.parse(users)
    }
    catch (err) {
        document.getElementById("every").innerText = `${err.message}`
    }
    return parsedUsers
}