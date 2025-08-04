function showFullName() {
  const first = document.getElementById("first").value;
  const middle = document.getElementById("middle").value;
  const last = document.getElementById("last").value;

  function outer() {
    function middlePart() {
      function inner() {
        // Lexical scoping part
        return `${first} ${middle} ${last}`;
      }
      return inner();
    }
    return middlePart();
  }

  const fullName = outer();
  document.getElementById("output").innerText = `Full Name: ${fullName}`;
}
