function checkEligibility() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;

    var name = firstname + " " + lastname;

    var message =
      age >= 18
        ? `Hello ${name}, welcome to Apty!`
        : `Hello ${name}, comeback after ${18 - age} years.`;

    document.getElementById("result").textContent = message;
  }