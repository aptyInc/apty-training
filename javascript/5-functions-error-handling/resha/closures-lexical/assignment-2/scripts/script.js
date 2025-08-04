const output = document.getElementById("output");

function concat() {
    function level1() {
        const name = document.getElementById("name").value;
        const nameStr = `My name is ${name}, `;

        function level2() {
            const age = Number(document.getElementById("age").value);
            const ageStr = `and i am ${age} years old. `;

            function level3() {
                const title = document.getElementById("title").value;
                const titleStr = `Working as a ${title} at Apty.`;
                return nameStr + ageStr + titleStr;
            }
            return level3();
        }
        return level2();
    }
    output.innerText = `${level1()}`;
}
