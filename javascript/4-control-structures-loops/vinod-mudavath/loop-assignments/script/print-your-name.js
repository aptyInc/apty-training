
const vinodPattern = [
    ['V', ' ', ' ', ' ', 'V', ' ', ' ','I',' ', 'N', ' ', 'N', ' ', ' ', 'O', 'O', ' ', ' ', ' D', 'D','D'],
    ['V', ' ', ' ', ' ', 'V', ' ', ' ','I',' ', 'N', ' ', 'N', ' ', 'O', ' ', ' ', 'O ', ' ', 'D', ' ',' ', 'D'],
    ['V', ' ', ' ', ' ', 'V', ' ', ' ','I',' ', 'N', 'N', 'N', ' ', 'O', ' ', ' ', ' O', ' ', 'D', ' ',' ', 'D'],
    [' ', 'V', ' ', 'V', ' ', ' ', ' ','I',' ', 'N', ' ', 'N', ' ', 'O', ' ', ' ', 'O ', ' ', 'D', ' ',' ', 'D'],
    [' ', ' ', 'V', ' ', ' ', ' ', ' ','I',' ', 'N', ' ', 'N', ' ', ' ', 'O', 'o', ' ',  ' ', ' D','D','D']
];

let result = document.getElementById('result');
let res = '';

for (const row of vinodPattern) {
    let myName = ''
    for (const char of row) {
        myName += char+' '
    }
    res += `${myName} \n`
}

result.innerText = res;


