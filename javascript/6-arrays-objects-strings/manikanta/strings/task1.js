function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result = input.split(' ') 
                    .map(word => word.length) 
                    .join(' ');
    res.innerHTML = result;
}