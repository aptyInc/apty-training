function calculate_grade(grade){
    if(grade >= 90){
        return "A";
    }else if(grade >= 75 && grade<=89){
        return "B";
    }else if(grade >= 50 && grade <= 74){
        return "C";
    }else{
        return "F";
    }
}
document.getElementById("grading-form").addEventListener("submit" ,(event) => { 
    event.preventDefault();

    const grade = document.getElementById("grade").value;
    const grading_result = document.getElementById("grading_result");

    const grade_calculate = calculate_grade(Number(grade))
    grading_result.textContent = `Your Total Grade is: ${grade_calculate}`
    
});