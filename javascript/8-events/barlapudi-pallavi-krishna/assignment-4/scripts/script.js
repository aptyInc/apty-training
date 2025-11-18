document.getElementById('myForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    alert('Please fill in all fields.');
    event.preventDefault();
  }
});
