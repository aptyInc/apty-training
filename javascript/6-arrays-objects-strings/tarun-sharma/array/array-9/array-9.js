function checkScores() {

    var students = [

        { name: 'Bob', score: 8 },
        { name: 'Alice', score: 90 }
    ];
    
    var allPassed = students.every(function(s) {

        return s.score > 35;
    });
    
    var someFailed = students.some(function(s) {

        return s.score < 35;
    });
    

    if (allPassed) {

        document.getElementById("result").innerText = "All Students Passed";

    } else if (someFailed) {

        document.getElementById("result").innerText = "Some Students Failed";
    }

    
}
