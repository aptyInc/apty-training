function extractNames() {
    let input = document.getElementById("namesInput").value;
    let names = input.split(",").map((name) => name.trim());
    let firstThree = names.slice(0, 3);
    let lastTwo = names.slice(-2);
    document.getElementById("firstThree").innerText = firstThree.join(", ");
    document.getElementById("lastTwo").innerText = lastTwo.join(", ");
}
