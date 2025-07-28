document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("registrationForm")
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const pswd = document.getElementById("pswd")

    const nameErr = document.getElementById("name-error")
    const emailErr = document.getElementById("email-error")
    const pswdErr = document.getElementById("pswd-error")

    function showError(input, errorEle) {
        input.classList.add('invalid')
        input.classList.remove('valid')
        errorEle.style.display = 'inline'
    }
    function showSuccess(input, errorEle) {
        input.classList.add('valid')
        input.classList.remove('invalid')
        errorEle.style.display = 'none'
    }

    name.addEventListener('input', function () {
        if (name.value.trim().length >= 3) {
            showSuccess(name, nameErr)
        }
        else {
            showError(name, nameErr)
        }
    })
    email.addEventListener('input', function () {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailPattern.test(email.value.trim())) {
            showSuccess(email, emailErr)
        }
        else {
            showError(email, emailErr)
        }
    })
    pswd.addEventListener('input', function () {
        const pswdPattern = /^(?=.*\d).{8,}$/
        if (pswdPattern.test(pswd.value.trim())) {
            showSuccess(pswd, pswdErr)
        }
        else {
            showError(pswd, pswdErr)
        }
    })

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
        }
    })
})