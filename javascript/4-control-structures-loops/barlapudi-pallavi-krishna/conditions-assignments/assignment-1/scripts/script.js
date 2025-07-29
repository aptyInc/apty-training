function checkMarks(){
    const marks=parseInt(document.getElementById("marks").value);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("results").innerText = "Please enter your marks.";
        return;
    }
    if(marks>=90){
        document.getElementById("results").innerText=`For ${marks} marks your grade is A`;
    }else if(marks>=75){
        document.getElementById("results").innerText=`For ${marks} marks your grade is B`;
    }else if(marks>=50){
        document.getElementById("results").innerText=`For ${marks} marks your grade is C`;
    }else{
        document.getElementById("results").innerText=`For ${marks} marks your grade is F`;
    }
}