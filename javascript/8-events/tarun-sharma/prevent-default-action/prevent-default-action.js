document.getElementById('myForm').addEventListener('submit', (e) => {

  if (!document.getElementById('name').value) {
    e.preventDefault();
    
    alert('Name is required');
  }

});