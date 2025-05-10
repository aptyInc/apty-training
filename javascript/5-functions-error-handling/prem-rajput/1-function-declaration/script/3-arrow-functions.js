let count = 0;

document.getElementById("incrementButton").addEventListener("click", () => {
    document.getElementById("counter").innerText = `Count: ${++count}`;
});
