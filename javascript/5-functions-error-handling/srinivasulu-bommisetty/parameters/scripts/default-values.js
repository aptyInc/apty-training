let form = document.getElementById("form");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let length = e.target[0].value;
  let width = e.target[1].value;
  if(!length){
    length=undefined;
  }
  if(!width){
    width=undefined
  }

  if(width <= -1 || length <= -1) {
    result.innerHTML=`negative values are not accepted `
    return
  }

  Area_of_rectangle(length,width)

});

function Area_of_rectangle(length = 0, width = 0) {
 result.innerHTML=` Area of Rectangle : ${length * width}` ;
}
