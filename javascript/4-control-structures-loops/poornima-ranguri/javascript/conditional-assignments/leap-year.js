

function onCheckLeapYear(){
    let yearElement = document.getElementById("year");

    

    if (yearElement.value !== ""){
        let year = parseInt(yearElement.value);
        
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
            document.getElementById("result").textContent = "Leap Year";
        }else{
            document.getElementById("result").textContent = "Not A Leap Year";
        }
    
    }else{
        document.getElementById("result").textContent = "Required";
       
    }
}