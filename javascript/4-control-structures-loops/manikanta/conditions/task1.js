function grade(){
    let res;
    let marks = parseInt(document.getElementById('n').value);

    if (marks >= 90) {
        res = "Grade A";
    } else if (marks >= 75) {
        res = "Grade B";
    } else if (marks >= 50) {
        res = "Grade C";
    } else {
        res = "Grade F";
    }

    document.getElementById('r').innerHTML = res;
}