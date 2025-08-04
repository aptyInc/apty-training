function caching() {
    const cache = {};
    return function calculate(num) {
        if(num === 0 || num === 1) {
            return 1;
        }

        if(cache[num]) {
            return cache[num];
        }

        let mul = 1;
        for(let i=2; i<=num; i++) {
            mul *= i;
        }
        cache[num] = mul;
        return mul;
    }
}

const calculate = caching();

function getValues() {
    const output = document.getElementById("output");
    const num = Number(document.getElementById("num").value);

    if (isNaN(num) || num < 0) {
        output.innerText = "Please enter a non-negative number.";
        return;
    }

    const res = calculate(num);
    output.innerText = `Factorial of ${num} is ${res}`;
}