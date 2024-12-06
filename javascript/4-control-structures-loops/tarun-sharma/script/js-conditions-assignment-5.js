function oddOrEven() {
    var oddEven = document.getElementById("number").value;
    oddEven = parseInt(oddEven);

    var result;

    if (oddEven % 2 === 0) {
        result = "This is an even number";
    } else {
        result = "This is a Odd number"
    }

    document.getElementById("result").innerText = result;






}




