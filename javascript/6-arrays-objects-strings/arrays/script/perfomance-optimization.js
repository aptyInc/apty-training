document.getElementById("testPerformance").addEventListener("click", () => {
    const largeArray = Array.from({ length: 10_000_000 }, (_, i) => i);
    const results = [];


    const forStart = Date.now();
    for (let i = 0; i < largeArray.length; i++) {
        const temp = largeArray[i];
    }
    const forTime = Date.now() - forStart;
    results.push({ method: "For Loop", time: forTime });

    const forOfStart = Date.now();
    for (const value of largeArray) {
        const temp = value;
    }
    const forOfTime = Date.now() - forOfStart;
    results.push({ method: "For...of Loop", time: forOfTime });

    const forEachStart = Date.now();
    largeArray.forEach(value => {
        const temp = value;
    });
    const forEachTime = Date.now() - forEachStart;
    results.push({ method: "ForEach Loop", time: forEachTime });

    const resultsTable = document.getElementById("resultsTable");
    resultsTable.innerHTML = results
        .map(
            result => `
            <tr>
                <td>${result.method}</td>
                <td>${result.time} ms</td>
            </tr>
        `
        )
        .join("");
});