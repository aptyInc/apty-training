function checkLeapYear() {
    const year = parseInt(document.getElementById("year").value);
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      document.getElementById("result").textContent = `${year} is a Leap Year.`;
    } else {
      document.getElementById(
        "result"
      ).textContent = `${year} is Not a Leap Year.`;
    }
  }
