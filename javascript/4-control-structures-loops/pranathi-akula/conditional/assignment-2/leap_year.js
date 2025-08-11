function Checkleapyear() {
  const year = parseInt(document.getElementById("year").value);

  // Leap year logic
  let isLeapYear;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeapYear = true;
      } else {
        isLeapYear = false;
      }
    } else {
      isLeapYear = true;
    }
  } else {
    isLeapYear = false;
  }

  // Display result
  document.getElementById("result").textContent = isLeapYear
    ? `Result: ${year} is a leap year.`
    : `Result: ${year} is not a leap year.`;
}
