
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const marks =parseInt(document.getElementById("marks").value);
    let result = document.getElementById("result");

    // 90+ => Grade A, 75-89 => Grade B, 50-74 => Grade C, Below 50 => Grade F.
    if (marks >= 90) result.innerText = 'Grade A';
    else if (marks >= 75 && marks <= 89) result.innerText = 'Grade B';
    else if (marks >= 50 && marks <= 74) result.innerText = 'Grade C';
    else result.innerText = 'Grade F';
}