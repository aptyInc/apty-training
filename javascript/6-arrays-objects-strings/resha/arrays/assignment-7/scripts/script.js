const users = [
    { name: 'Rahul', age: 30 },
    { name: 'Pranaw', age: 25 },
    { name: 'Smayan', age: 40 }
];

const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let messages = [];
    users.forEach(user => {
        messages.push(`${user.name} is ${user.age} years old.\n`);
    });
    output.innerText = messages.join(" ");
});
