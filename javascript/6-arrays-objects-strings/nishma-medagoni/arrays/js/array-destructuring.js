function swapVariables() {
    const aInput = document.getElementById("aInput").value;
    const bInput = document.getElementById("bInput").value;

    // Check if inputs are empty
    if (aInput === "" || bInput === "") {
      document.getElementById("result").innerText =
        "Please enter values for both a and b.";
      return;
    }

    // Parse input values as integers
    let a = parseInt(aInput);
    let b = parseInt(bInput);

    // Swap values using array destructuring
    [a, b] = [b, a];

    // Display the result
    document.getElementById(
      "result"
    ).innerText = `After swapping: a = ${a}, b = ${b}`;
  }