function sortStudents() {

    var students = [

        { name: 'Bob', score: 80 },
        { name: 'Alice', score: 90 }
    ];


    students.sort(function(a, b) {
        return b.score - a.score;
    });


    document.getElementById("result").innerText = JSON.stringify(students);

    
}
