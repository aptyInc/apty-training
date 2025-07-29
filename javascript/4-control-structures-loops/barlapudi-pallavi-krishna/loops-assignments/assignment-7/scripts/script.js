function generate(){
    let num=parseInt(document.getElementById("number").value);

    if(isNaN(num)){
        document.getElementById("results").innerHTML=`Please enter a number.<br>`;
        return;
    }else{
       document.getElementById("results").innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            document.getElementById("results").innerHTML+=`${num} * ${i} = ${num*i}<br>`;
        }
    }
}