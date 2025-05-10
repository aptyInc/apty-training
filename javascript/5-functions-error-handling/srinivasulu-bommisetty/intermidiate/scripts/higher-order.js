function create_para(value) {
  let para = document.createElement("p");
  para.innerText = `${value}`;
  document.body.append(para);
}


function repeatAction(cb,n){
    for(i=1;i<=n;i++){
        cb(`number : ${i}`)
    }
}


repeatAction(create_para, 8)