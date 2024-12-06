function calculate_leap_year(leap_year){
    if((leap_year%400 == 0 || leap_year % 4 == 0 ) && leap_year%100 !==  0){
        return true;
    }
    return false;
}
document.getElementById("leap-form").addEventListener("submit" ,(event) => { 
    event.preventDefault();

    const leap_year_id = document.getElementById("leap-year").value;
    const leap_year_result = document.getElementById("leap_year_result");

    const leap_year = new Date(leap_year_id);
    const calculate_leap = calculate_leap_year(leap_year.getFullYear());
    leap_year_result.textContent = calculate_leap ? `It's a leap year: ${leap_year.getFullYear()}` : `Not a leap year: ${leap_year.getFullYear()}`;
});