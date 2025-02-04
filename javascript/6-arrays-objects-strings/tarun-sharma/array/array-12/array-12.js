function removeDuplicates() {

    var array = [1, 3, 2, 2, 3, 4, 4, 3];

    var unique = [];
    array.forEach(function(item) {

        if (unique.indexOf(item) === -1) {

            unique.push(item);
        }
    });


    document.getElementById("result").innerText = JSON.stringify(unique);
    
}
