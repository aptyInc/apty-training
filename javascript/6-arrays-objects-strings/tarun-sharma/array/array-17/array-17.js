function combineArrays() {

    var arr1 = [1, 2, 3];
    var arr2 = [3, 4, 5];
    
    var combined = [...new Set([...arr1, ...arr2])];

    document.getElementById("result").innerText = JSON.stringify(combined);

}
