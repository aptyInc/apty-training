function generatePyramid() {
    console.log("asfs")
  const rows = parseInt(document.getElementById("rows").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(rows) || rows <= 0) {
    resultDiv.innerHTML = "Please enter a valid number of rows.";
    return;
  }

  console.log("harsh")


  let pyramid = "";

  //for each i how many stars ? star = n + (n-1) for each row. OR 2n- 1. Our value should always be odd. If it is event it will not print it.
  // 1 -> 1 + 0 
  // 2 -> 2 + 1
  // 3 -> 3 + 2
  // 12 -> 12 + 11 

  // Loop to generate pyramid pattern
  for(let  i = 1; i<=rows; i++){
    console.log("harsh")

    //Printing the space:
    //Space -> total_row - i. Because it will give us the middle value of the spaces.
    for(let space_print = 1; space_print<=rows-i; space_print++){
        pyramid += " ";
    }

    //Printing the star:
    for(let star_print = 1; star_print <=((i*2) - 1); star_print++){
        pyramid+="*";
    }

    pyramid += '\n'
  }

  console.log(resultDiv)

  resultDiv.innerText = pyramid;
}
