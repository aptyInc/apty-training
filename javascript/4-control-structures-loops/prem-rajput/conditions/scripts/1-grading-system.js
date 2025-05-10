function checkGrade() {

    var marks = document.getElementById("marks").value;
    var grade = "";

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 75) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = "Your Grade: " + grade;
    
}
