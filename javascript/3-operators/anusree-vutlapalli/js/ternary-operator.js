function validateAge() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = Number(document.getElementById("age").value);

    const name = `${firstname} ${lastname}`;
    const result = age >= 18
        ? `Hello ${name} welcome to Apty!`
        : `Hello ${name} comeback after ${18 - age} years.`;

    document.getElementById("result").innerHTML = result;
}