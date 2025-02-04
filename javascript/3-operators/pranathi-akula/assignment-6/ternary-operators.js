function verifyAge() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const age = parseInt(document.getElementById("age").value);
  const name = `${firstname} ${lastname}`.trim();
  const result =
    age >= 18
      ? `Hello ${name}, welcome to Apty!`
      : `Hello ${name}, come back after ${18 - age} years.`;

  document.getElementById("result").textContent = result;
}
