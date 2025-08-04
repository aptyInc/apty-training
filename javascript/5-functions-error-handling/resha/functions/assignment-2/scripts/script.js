const output = document.getElementById('output');

function generate() {
    const n = document.getElementById('n').value;
    const str = n.split(',').map(Number);

    const res = function(str) {
        for(let i=0; i<str.length; i++) {
            for(let j=i+1; j<str.length; j++) {
                let temp = 0;
                if(str[i] > str[j]) {
                    temp = str[i];
                    str[i] = str[j];
                    str[j] = temp;
                }
            }
        }
        return str;
    }

    output.innerText = `Sorted Array: ${res(str)}`

}


