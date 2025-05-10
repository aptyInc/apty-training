function chunkArray() {

    var array = [1, 2, 3, 4, 5];

    var size = 2;
    var chunks = [];
    
    for (var i = 0; i < array.length; i += size) {

        chunks.push(array.slice(i, i + size));
    }

    document.getElementById("result").innerText = JSON.stringify(chunks);


}
