document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = Number(document.getElementById("age").value);

    // Using the ternary operator to check if age is >= 18
    const name = `${firstname} ${lastname}`;
    const message = age >= 18 
        ? `Hello ${name}, welcome to Apty!` 
        : `Hello ${name}, come back after ${18 - age} years.`;

    // Display the result
    document.getElementById("result").textContent = message;
});