function calculateSum(event) {
    event.preventDefault();

    const input = document.getElementById("numbers").value;
    const numberArray = input.split(",").map(Number);

    function sum(...args) {
        let total = 0;
        for (let i = 0; i < args.length; i++) {
            total += args[i];
        }
        return total;
    }

    const result = sum(...numberArray);

    document.getElementById("result").innerText = `Sum: ${result}`;
}
