function wordLengths() {

    var input = document.getElementById("inputString").value;
    var lengths = input.split(" ").map(function(word) {
        
        return word.length;
    });

    document.getElementById("result").innerText = lengths.join(" ");


}
