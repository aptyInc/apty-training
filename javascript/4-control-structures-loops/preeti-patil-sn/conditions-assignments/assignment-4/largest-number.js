function largestNumber(){
    let number1= document.getElementById("number1").value;
    let number2= document.getElementById("number2").value;
    let number3= document.getElementById("number3").value;

     if (number1 === "" || number2 === "" || number3 === "") {
        document.getElementById("result").textContent =
          "Please enter all three numbers for comparison.";
        return;
      }

      number1 = parseFloat(number1);
      number2 = parseFloat(number2);
      number3 = parseFloat(number3);

      let largest;
      if (number1>number2 && number1>number3) {
        largest = "Number1 is the largest";
      } else if (number2>number1 && number2>number3) {
        largest = "Number2 is the largest";
      } else if (number3>number1 && number3>number2){
        largest = "Number3 is the largest";
      } else if(number1==number2 || number1==number3 ||number2==number3) {
        largest = "Two or more numbers are equal";
      }else{
        largest="invalid result"
      }
  
      document.getElementById(
        "result"
      ).textContent = `${largest}`;
    }
