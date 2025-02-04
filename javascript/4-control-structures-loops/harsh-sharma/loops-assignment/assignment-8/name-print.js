window.onload = (event) => {
  const name_pattern = [
                ["H  H", "AAAA",  "RRRR", "SSSS", "H  H"],
                ["H  H", "A  A",  "R R ", "S   ", "H  H"],
                ["HHHH", "AAAA",  "RRRR", "SSSS", "HHHH"],
                ["H  H", "A  A",  "R R ", "   S", "H  H"],
                ["H  H", "A  A",  "R  R", "SSSS", "H  H"]
            ];

    const display_id = document.getElementById("name-print");
    let result = "";

    for(let value of name_pattern){
        result += value.join("  ");
        result += "\n";
    }
    display_id.innerText = result;

    console.log(result);
};
