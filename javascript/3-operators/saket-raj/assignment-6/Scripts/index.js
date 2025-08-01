function checkEligibility() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let userAge = Number(document.getElementById("age").value);

  document.getElementById("result").innerText =
    userAge >= 18
      ? `Hello ${firstName} ${lastName}, you are eligible for DL registration.`
      : `Hello ${firstName} ${lastName}, you can register for a DL after ${
          18 - userAge
        } years.`;
}
