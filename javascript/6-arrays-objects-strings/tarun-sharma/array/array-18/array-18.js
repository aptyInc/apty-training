function arrayOperations() {

    var numbers = [1, 2, 3, 4, 5, 6];

    var result = numbers

        .filter(function(num) {

            return num % 2 === 0;
        })

        .map(function(num) {

            return num * 2;

        })
        
        .reduce(function(sum, num) {

            return sum + num;

        }, 0);

    document.getElementById("result").innerText = result;
    

}
