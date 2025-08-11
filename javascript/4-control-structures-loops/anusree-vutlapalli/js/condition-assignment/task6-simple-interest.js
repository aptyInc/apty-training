function simpleInterest() {
    const principal = parseInt(document.getElementById("principal").value); 
    const rate = parseInt(document.getElementById("rate").value); 
    const time = parseInt(document.getElementById("time").value); 

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;

    document.getElementById("result").innerText = "Simple Interest is : " + simpleInterest;
}
