function checkAge() {
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const age = document.getElementById('age').value;
      const name = `${firstName} ${lastName}`;

      const message = (age >= 18) ? `Hello ${name}, welcome to Apty!`: `Hello ${name}, come back after ${18 - age} year(s).`;

      document.getElementById('message').innerHTML = message;
}