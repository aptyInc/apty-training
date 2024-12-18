function generateGreeting() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var message = `hello, my name is ${name} and i am ${age} years old!!`;
    document.getElementById("result").innerText = message;
}
