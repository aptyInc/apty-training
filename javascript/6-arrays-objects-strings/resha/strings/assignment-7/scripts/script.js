const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(str) {
    if(str.length >= 10) output.innerText = `${str}`;
    else {
        let res = "", n = 10;
        for(let i=0; i<n-str.length; i++) {
            res += '0';
        }
        let newStr = res.concat(str);
        output.innerText = `${newStr}`;
    }
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;    
    if(!str) {
        output.innerText = "Please enter a string";
        return;
    }
    getValues(str.trim());
})
