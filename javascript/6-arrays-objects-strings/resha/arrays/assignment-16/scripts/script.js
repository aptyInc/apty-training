const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const arr = Array.from({ length: 100000 }, (_, i) => i);

    let t1 = performance.now();
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i] * 2;
    }
    let t2 = performance.now();

    let t3 = performance.now();
    for (let num of arr) {
        let x = num * 2;
    }
    let t4 = performance.now();

    let t5 = performance.now();
    arr.forEach(num => {
        let x = num * 2;
    });
    let t6 = performance.now();

    output.innerText =
        `for loop: ${(t2 - t1).toFixed(3)} ms\n` +
        `for...of loop: ${(t4 - t3).toFixed(3)} ms\n` +
        `forEach: ${(t6 - t5).toFixed(3)} ms\n\n` +
        `Conclusion:\nUse "for" for best performance on large arrays. "for...of" is clean and readable. "forEach" is elegant but slightly slower.`;
});
