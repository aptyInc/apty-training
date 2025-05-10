let form = document.getElementById("form");
let perimeter = document.getElementById("perimeter");
let area=document.getElementById("area");

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
    perimeter.innerHTML=`negative values are not accepted `
    return
  }
  perimeter_of_rectangle(length,width)

});

function perimeter_of_rectangle(length = 0, width = 0){

    function Area_of_rectangle() {
        area.innerHTML=` Area of Rectangle : ${length * width}` ;
  }
  Area_of_rectangle()

  perimeter.innerHTML=`perimeter of rectangle : ${Number(length) + Number(width)}`

}


