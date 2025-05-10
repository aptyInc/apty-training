document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (!name || !email) {
      alert("Please fill out all fields!");
    } else {
      alert("Form submitted successfully!");
    }
  });