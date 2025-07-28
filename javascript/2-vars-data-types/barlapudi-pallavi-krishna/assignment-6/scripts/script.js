const output = document.getElementById("output");

let name = "Pallavi Krishna";
let age = 20;
let isDeveloper = true;
let luckyNumber;
let nothing = null;
let badge = Symbol("id");
let user = { role: "developer" };

output.innerHTML += `Hello, my name is ${name} and I am ${age} years old.<br>`;
output.innerHTML += `It is ${isDeveloper} that I'm a ${user.role}.<br>`;
output.innerHTML += `My lucky number is ${luckyNumber}, but sometimes it's just 'undefined'.<br>`;
output.innerHTML += `My badge code is ${badge.toString()}, and my data is stored in an object.<br>`;
output.innerHTML += `Sometimes, nothing matters - like ${nothing}!<br>`;
