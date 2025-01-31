function str(inp) {
    return inp.toUpperCase();
}


function con(cb, inp) {
    return cb(inp);  
}


function pro() {
    let inp = document.getElementById('in').value;

   
    if (inp.trim() === "") {
        document.getElementById('res').innerHTML = "Please enter some text!";
    } else {
        
        document.getElementById('res').innerHTML = con(str, inp);
    }
}