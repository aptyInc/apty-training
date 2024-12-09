function outerFunction() {
    const outerVar = "Outer Value"

    function middleFunction() {
        const middleVar = "Middle Value"

        function innerFunction() {
            const innerVar = "Inner Value"

            return `Outer: ${outerVar}, Middle: ${middleVar}, Inner: ${innerVar}`
        }

        return innerFunction()
    }

    return middleFunction()
}

function showResult() {
    const result = outerFunction()
    document.getElementById('result').innerText = result
}