function mostFrequent() {

    var array = [1, 3, 2, 2, 3, 3, 3, 2];
    
    var frequency = array.reduce(function(acc, num) {
        acc[num] = (acc[num] || 0) + 1;

        return acc;
    }, {});

    var mostFrequent = Object.keys(frequency).reduce(function(a, b) {

        return frequency[a] > frequency[b] ? a : b;
    });

    document.getElementById("result").innerText = mostFrequent;


}
