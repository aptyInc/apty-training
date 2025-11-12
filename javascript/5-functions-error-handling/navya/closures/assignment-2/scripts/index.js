const output = document.getElementById("output");

function showNestedResult() {
    const a = document.getElementById("val1").value;
    const b = document.getElementById("val2").value;
    const c = document.getElementById("val3").value;


    function levelOne(x) {


        function levelTwo(y) {


            function levelThree(z) {
                return `Combined Output: ${x} - ${y} - ${z}`;
            }

            return levelThree;
        }

        return levelTwo;
    }

    const resultMessage = levelOne(a)(b)(c);

    output.textContent = resultMessage;
}
