function generateMessage() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    function levelOne() {
        function levelTwo() {
            return `Hello, my name is ${name} and I am ${age} years old.`;
        }
        return levelTwo();
    }
    var message = levelOne();
    document.getElementById("message").textContent = message;
}