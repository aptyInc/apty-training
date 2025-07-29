function check(){
    const year=parseInt(document.getElementById("year").value);
    if(isNaN(year)){
        document.getElementById("results").innerText="Please Enter a Year.";
        return;
    }


    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("results").innerText=`${year} is a leap year`;
    } else {
        document.getElementById("results").innerText=`${year} is not a leap year`;
    }
}