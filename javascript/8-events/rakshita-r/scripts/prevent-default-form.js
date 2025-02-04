
    document.getElementById('myForm').addEventListener('submit', function (event) {
      
      event.preventDefault();


      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      let isValid = true;

      
      if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
      }

      
      if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
      }

      if (isValid) {
        alert('Form submitted successfully!');
       
      }
    });
  