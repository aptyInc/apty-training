let var_tag = document.getElementById("var_tag");
let let_tag = document.getElementById("let_tag");
let const_tag = document.getElementById("const_tag");

// Variable let Redeclare and Redfine
let let_test = "Apty 1.0";
let_tag.innerHTML += `<p id="let-tag-p">Initial Value: ${let_test}</p>`;
let_test = "Apty 2.0";
let_tag.innerHTML += `<p id="let-tag-p">Value After Update: ${let_test}</p>`;
//But we can use eval to see what is correct or not:
try{
  eval('let let_name = "Apty 3.0"; let let_name = "Apty 4.0";' )
}catch(error){
  let_tag.innerHTML += `<p id="let-tag-p"> Redeclare of Let is giving Error and Here is the error message: ${error.message} </p>`
}
// let let_test = "asjflks" ---> It is not possible because it do not do hoisting
// Redeclaring the let is possible because of hoisting

// Variable var Redeclare and Redfine
var var_test = "Excers 1.0";
var_tag.innerHTML += `<p id="let-tag-p">Initial Value: ${var_test}</p>`;
var_test = "Excers 2.0";
var_tag.innerHTML += `<p id="let-tag-p">Value After Update: ${var_test}</p>`;
var var_test = "Excers 3.0";
var_tag.innerHTML += `<p id="let-tag-p">Value After Redeclare: ${var_test}</p>`;

// Variable const Redeclare and Redfine
try {
  const const_test = "Nav 1.0";
  const_tag.innerHTML += `<p id="let-tag-p">Initial Value: ${const_test}</p>`;
  const_test = "Nav 2.0";
  //const const_test ---> It is not possible because it do not do hoisting.
} catch (e) {
  const_tag.innerHTML += `<p id="let-tag-p">Value After Update: ${e}</p>`;
}
try{
  eval('const let_name = "Nav 3.0"; const let_name = "Nav 4.0";' )
}catch(error){
  const_tag.innerHTML += `<p id="let-tag-p"> Redeclare of const is giving Error and Here is the error message: ${error.message} </p>`
}