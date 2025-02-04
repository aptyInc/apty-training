function checkAge() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const age = parseInt(document.getElementById("age").value, 10);
  const name = `${firstname} ${lastname}`;

  const message =
    age >= 18
      ? `Hello ${name}, welcome to Apty!`
      : `Hello ${name}, come back after ${18 - age} years.`;

  document.getElementById("result").textContent = message;
}
