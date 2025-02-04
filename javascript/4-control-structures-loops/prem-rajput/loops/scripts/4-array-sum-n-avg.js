function calculateSumAndAverage() {
    var numbers = document.getElementById("numbers").value.split(",").map(Number);
    var sum = 0;
    var count = 0;

    for (let num of numbers) {
        sum += num;
        count++;
    }

    var average = sum / count;

    document.getElementById("sum").innerHTML = "Sum: " + sum;
    document.getElementById("average").innerHTML = "Average: " + average;
}
