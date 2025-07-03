try {
    eval('var v=10; var v=10')
    document.getElementById('var').innerHTML += `Re-Declared var with var<br>`
}
catch (err) {
    document.getElementById('var').innerHTML = err.message
}
try {
    eval('var v=10; v=20')
    document.getElementById('var').innerHTML += `Declared var with var and got its value modified<br>`
}
catch (err) {
    document.getElementById('var').innerHTML = err.message
}
try {
    eval('let l=10; l=20')
    document.getElementById('let').innerHTML += `Declared var with let and got its value modified<br>`
}
catch (err) {
   document.getElementById('let').innerHTML += `${err.message}<br>`
}
try {
    eval('let l=10; let l=20')
}
catch (err) {
   document.getElementById('let').innerHTML += `${err.message}<br>`
}
try {
    eval('const c=10; const c=20')
}
catch (err) {
    document.getElementById('const').innerHTML += `${err.message}<br>`
}
try {
    eval('const c=10; c=20')
}
catch (err) {
    document.getElementById('const').innerHTML += `${err.message}<br>`
}