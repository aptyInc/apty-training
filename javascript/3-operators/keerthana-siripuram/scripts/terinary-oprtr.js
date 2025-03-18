
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('apty-form')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let fName = document.getElementById("fname").value
        let lName = document.getElementById("lname").value
        let age = parseInt(document.getElementById("age").value)
        let res = (age >= 18) ? `Hello ${fName}${lName} welcome to apty` : `Hello ${fName} ${lName} comeback after(18-number) years`
        document.getElementById("res").textContent = res
    })
})