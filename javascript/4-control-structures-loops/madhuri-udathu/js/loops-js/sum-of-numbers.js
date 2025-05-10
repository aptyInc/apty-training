function calculateSum() {
    const n = Number(document.getElementById("numberInput").value);
    let sum = 0;
    let i = 1;

    while (i <= n) {
        sum += i;
        i++;
    }

    document.getElementById("result").textContent = `The sum of numbers from 1 to ${n} is ${sum}.`;
}