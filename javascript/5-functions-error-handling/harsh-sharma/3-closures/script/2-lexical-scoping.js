function generateString() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    function outerFunction() {
        const city = document.getElementById("city").value;

        function middleFunction() {
            function innermostFunction() {
                return `Hello, ${firstName} ${lastName} from ${city}!`;
            }
            return innermostFunction();
        }
        return middleFunction();
    }

    const result = outerFunction();
    document.querySelector(".output").innerText = result;
}
