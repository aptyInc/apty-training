function outerFunction(outerVar) {
    function middleFunction(middleVar) {
        function innerFunction(innerVar) {
            return `Outer: ${outerVar}, Middle: ${middleVar}, Inner: ${innerVar}`;
        }
        return innerFunction;
    }
    return middleFunction;
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const outerVar = document.getElementById("outerVar").value;
    const middleVar = document.getElementById("middleVar").value;
    const innerVar = document.getElementById("innerVar").value;

    const middleFunc = outerFunction(outerVar);
    const innerFunc = middleFunc(middleVar);
    const result = innerFunc(innerVar);

    document.getElementById("result").innerText = result;
});
