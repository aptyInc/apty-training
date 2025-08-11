function checkGrade() {
    var number = document.getElementById("marks").value;

    number = parseInt(number);

    var grade;

    if (number >= 90 ) {
        grade = "A";
    } else if (number >= 75) {
        grade = "B";
    } else if (number >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }
    document.getElementById("grade").innerText = "Your Grade is  " + grade;
}