function checkLeapYear(){
    let year=Number(document.getElementById("year").value);
    let display=document.getElementById("result");
    if((year%4==0 && year%100!==0) || (year%400 == 0)){
        display.innerText=`${year} is a leap year`;
    }
    else{
        display.innerText=`${year} is not a leap year`; 
    }
}