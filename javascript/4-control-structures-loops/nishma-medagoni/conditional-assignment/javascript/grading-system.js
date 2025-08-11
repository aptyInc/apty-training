function grade() {
    const marks = document.getElementById('marks').value 

    if (isNaN(marks) || (marks) > 100 || (marks) < 0) {
        document.getElementById('result').innerText = 'Please Enter Valid Marks'
        return 
    }

    if (marks >= 90) {
        document.getElementById('result').innerText = 'Result: Grade A'
    }
    else if (marks >= 75 && marks <=89) {
        document.getElementById('result').innerText = 'Result: Grade B'
    }
    else if (marks >= 50 && marks <=74) {
        document.getElementById('result').innerText = 'Result: Grade C'
    }
    else if (marks < 50) {
        document.getElementById('result').innerText = 'Result: Grade F'
    }
}