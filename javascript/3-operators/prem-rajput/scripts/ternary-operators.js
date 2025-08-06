function checkAge() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = Number(document.getElementById("age").value);

    const fullName = `${firstname} ${lastname}`;
    const result = age >= 18 ? `Hello, ${fullName}, welcome to Apty!` : `Hello ${fullName}, comeback after ${18 - age} years. : (`;

    document.getElementById("result").innerText = result;
}