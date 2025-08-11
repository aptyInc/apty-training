function grade(){
    const marks=Number(document.getElementById("marks").value);
    if(marks>=90){
        display("A");
    }
    else if(marks>=75 && marks<90){
        display("B");
    }
    else if(marks>=50 && marks<75){
        display("C");
    }
    else if(marks<50){
        display("F");
    }
    else{
        display("Invalid number");
    }
}
function display(grades){
    let results=document.getElementById("result");
    results.innerText =`Grade: ${grades}`;
}