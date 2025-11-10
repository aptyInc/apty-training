let result = "";

var a = 10;
result += "var a declared: " + a + "<br>";

var a = 20;
result += "var a re-declared: " + a + "<br>";

a = 30;
result += "var a value changed: " + a + "<br><br>";

let b = 10;
result += "let b declared: " + b + "<br>";

try {
    let b = 20;
    result += "let b re-declared: " + b + "<br>";
} catch (err) {
    result += "let b re-declared: Error : " + err.message + "<br>";
}

b = 30;
result += "let b value changed: " + b + "<br><br>";

const c = 10;
result += "const c declared: " + c + "<br>";

try {
    const c = 20;
    result += "const c re-declared: " + c + "<br>";
} catch (err) {
    result += "const c re-declared: Error : " + err.message + "<br>";
}

try {
    c = 30;
    result += "const c value changed: " + c + "<br>";
} catch (err) {
    result += "const c value changed: Error : " + err.message + "<br>";
}

document.getElementById("resultBox").innerHTML = result;