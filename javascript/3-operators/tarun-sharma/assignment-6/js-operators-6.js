function generateMessage() {
    
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var age = parseInt(document.getElementById("age").value);
    
    var fullName = firstName + " " + lastName;

    var message = (age >= 18) 
        ? "Hello " + fullName + ", welcome to Apty Software Limited!" 
        : "Hello " + fullName + ", please come back after " + (18 - age) + " years.";
    
    document.getElementById("message").innerText = message;
}