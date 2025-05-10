
function merge(obj1, obj2) {
        
    let merged = {...obj1}; 

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            
            if (obj1[key] && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                merged[key] = merge(obj1[key], obj2[key]);
            } else {
                
                merged[key] = obj2[key];
            }
        }
    }

    return merged;
}


function pro() {
    let input1 = JSON.parse(document.getElementById('v1').value); 
    let input2 = JSON.parse(document.getElementById('v2').value); 
    let res = document.getElementById('res');  

    let result = merge(input1, input2);  

 
    res.innerHTML = JSON.stringify(result, null, 2); 
}