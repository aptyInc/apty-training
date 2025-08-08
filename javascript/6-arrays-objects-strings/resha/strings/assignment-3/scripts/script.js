const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;
    const s = str.trim();

    let res = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '\n') {
            res += "\\\n";
        } 
        else if (s[i] === '\t') {
            res += "\\\t";
        } 
        else {
            res += s[i];
        }
    }

    output.innerText = `Result: ${res}`;
})
