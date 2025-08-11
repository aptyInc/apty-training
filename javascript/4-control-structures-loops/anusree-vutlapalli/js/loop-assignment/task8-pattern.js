function displayName() {
    
    const pattern = [
        ["   A   ", "   ", "N   N", "   ", "U   U"],
        ["  A A  ", "   ", "NN  N", "   ", "U   U"],
        [" AAAAA ", "   ", "N N N", "   ", "U   U"],
        [" A   A ", "   ", "N  NN", "   ", "U   U"],
        [" A   A ", "   ", "N   N", "   ", " UUU "]
    ];

    let result = ""; 
    for (let row of pattern) {
        for (let value of row) {
            result += value;
        }
        result += "\n"; 
    }

    console.log(result);
}
displayName();
