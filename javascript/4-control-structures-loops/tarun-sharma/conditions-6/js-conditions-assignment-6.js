function simpleInterest() {
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("interest").value;
    var duration = document.getElementById("time").value;

    amount = parseInt(amount);
    rate = parseInt(rate);
    duration = parseInt(duration);

    var result;

    result = (amount * rate * duration) / 100;


    document.getElementById("result").innerText = result;

}