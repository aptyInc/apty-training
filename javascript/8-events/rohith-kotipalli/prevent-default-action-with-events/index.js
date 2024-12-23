let result = document.getElementById("formFeedback")
let form = document.getElementById("myForm")
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        result.textContent = "submitted successfully"
    });