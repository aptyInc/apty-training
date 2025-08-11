
document.getElementById("form").onsubmit = (evt) => {
    evt.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const age = parseInt(document.getElementById("age").value);

    console.log(firstName, lastName, age, typeof age);

    let result = (age >= 18) ? `Hello ${firstName + " " + lastName} welcome to apty` : `Hello ${firstName + " " + lastName} comeback after 18 years`;
    document.getElementById("result").innerText = result;
}