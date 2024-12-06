function onCheckStatus(){
    const scoreElement = document.getElementById("score");

    const score = parseInt(scoreElement.value);

    let resulText;

    if(score >=  90){
        resulText =  "Result : A Grade";
    }else if(score >= 75 && score <= 89){
        resulText = "Result : B Grade";
    }else if (score >= 50 && score <= 74){
        resulText = "Result : C Grade";
    }else{
        resulText = "Result : F Grade"
    }


    document.getElementById("result").textContent = resulText;

}

