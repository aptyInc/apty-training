const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const key = document.getElementById('key').value.trim();
    const val = document.getElementById('val').value.trim();

    if(!key) {
        output.innerText = "Please enter key input";
        return;
    }

    let obj = {};
    obj[key] = val;

    output.innerText = `${JSON.stringify(obj, null, 2)}`;

})
