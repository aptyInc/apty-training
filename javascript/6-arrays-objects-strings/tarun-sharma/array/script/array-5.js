function sliceArray() {

    var names = ["lucky", "prem", "harsh", "sai", "messi"];

    var firstThree = names.slice(0, 3);
    var lastTwo = names.slice(-2);

    document.getElementById("result").innerText =
        "First three names: " + firstThree.join(", ") + 

        "\nLast two names: " + lastTwo.join(", ");

        
}
