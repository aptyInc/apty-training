function generateFullName() {
        
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;

    
    function outer(firstName) {
        return function middle(middleName) {
            return function inner(lastName) {
                
                return `Full Name: ${firstName} ${middleName} ${lastName}`;
            };
        };
    }

    
    const result = outer(firstName)(middleName)(lastName);
    document.getElementById('result').innerHTML = result;
}