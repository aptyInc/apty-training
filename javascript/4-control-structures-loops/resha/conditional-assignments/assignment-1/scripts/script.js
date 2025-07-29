const output = document.getElementById('output');

function checkGrade() {
    const marks = Number(document.getElementById('marks').value);
    
    if (marks < 0 || marks > 100) {
        output.innerText = "Please enter a value between 0 and 100.";
        return;
    }

    if (marks >= 90) {
        output.innerText = "Grade: A";
    }

    else if (marks >= 75) {
        output.innerText = "Grade: B";
    }

    else if (marks >= 50) {
        output.innerText = "Grade: C";
    }
    
    else {
        output.innerText = "Grade: F";
    }
}