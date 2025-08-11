function calculateGrade() {
    let marks = document.getElementById("marks").value;

    // Convert the input value to a number, if user enters some string gets converted to number or we can use + before the document also, the unary operator + also helps to do this

    marks = parseFloat(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
      document.getElementById("result").textContent =
        "Please enter a valid number between 0 and 100.";
      return;
    }

    let grade;
    if (marks >= 90) {
      grade = "A";
    } else if (marks >= 75) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else {
      grade = "F";
    }

    document.getElementById(
      "result"
    ).textContent = `Your grade is: ${grade}`;
  }