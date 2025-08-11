function summ(...numbers){
    let result=0;
    for (let item of numbers) {
        result+=item;
      }
    return result;
}



document.getElementById("restForm").addEventListener("submit",function(event){
    event.preventDefault();
    const input = document.getElementById("num").value;

    const numberStrings = input.split(",");
    const numbers = [];

    for (let item of numberStrings) {
      let num = parseFloat(item.trim());
      if (!isNaN(num)) {
        numbers.push(num);
      }
    }

    if (numbers.length === 0) {
      document.getElementById("results").innerHTML =
        "Please enter valid numbers.</p>";
      return;
    }
    const res=summ(...numbers);

    document.getElementById("results").innerText=`The sum of numbers is ${res}`;
});