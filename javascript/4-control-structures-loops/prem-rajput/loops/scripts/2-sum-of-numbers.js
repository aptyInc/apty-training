function calculateSum() {
    var num = document.getElementById("number").value;
    var sum = 0;
    var i = 1;

    while (i <= num) {
        sum += i;
        i++;
    }

    document.getElementById("result").innerHTML = "Sum: " + sum;
}
