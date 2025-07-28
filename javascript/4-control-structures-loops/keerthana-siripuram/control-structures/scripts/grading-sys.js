function setTheGrade() {
    let marks = parseInt(document.getElementById("marks").value)
    if (marks >= 90) {
        res = "Grade A"
    }
    else if (marks >= 75 && marks <= 89) {
        res = "Grade B"
    }
    else if (marks >= 50 && marks <= 74) {
        res = "Grade C"
    }
    else {
        res = "Grade F"
    }
    document.getElementById("res").textContent = res
}