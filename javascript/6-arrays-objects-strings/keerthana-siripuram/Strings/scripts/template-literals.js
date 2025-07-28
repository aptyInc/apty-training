function greet() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    document.getElementById("res").innerText = `Hello my name is ${name} and I am ${age} years old`
}