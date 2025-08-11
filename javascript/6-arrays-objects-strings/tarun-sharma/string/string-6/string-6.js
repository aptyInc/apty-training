function unicode() {

    var input = document.getElementById("input").value;

    var unicodeValues = Array.from(input).map(function(char) {
        
        return char.charCodeAt(0);
    });

    document.getElementById("result").innerText = JSON.stringify(unicodeValues);

}
