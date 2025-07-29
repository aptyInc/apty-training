function generate(){
    const num=parseInt(document.getElementById("number").value);

    if(isNaN(num)||num<=0){
        document.getElementById("results").innerHTML="Please enter a non-negative number > 0";
        return;
    }else{
        let row="";
        for(let i=1;i<=num;i++){
            let spaces = " ".repeat(num - i);
            let stars = "*".repeat(2 * i - 1);
            row+=spaces+stars;
            row+="\n";
        }
        document.getElementById("results").textContent+=`${row}`;
    }
}