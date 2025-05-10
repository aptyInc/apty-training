let btn = document.getElementById("btn");

let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  if(!input){
    input=undefined;
  }
  higer_order_function(uppercase(input));
});

function higer_order_function(fun) {
  fun(i);
}

function uppercase(a=`empty string`) {
  result.innerText = `${a.toUpperCase()}`;
}
