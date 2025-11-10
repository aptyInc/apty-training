const messageBox = document.getElementById("msg");

function checkAge() {
    const fname = document.getElementById("firstName").value.trim();
    const lname = document.getElementById("lastName").value.trim();
    const age = Number(document.getElementById("ageValue").value);

    const fullName = `${fname} ${lname}`;

    const response = age >= 18
        ? `Hello ${fullName}, welcome to Apty!`
        : `Hello ${fullName}, come back after ${18 - age} years`;

    messageBox.textContent = response;
}
