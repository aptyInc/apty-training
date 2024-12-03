let var_tag = document.getElementById("var_tag");
let let_tag = document.getElementById("let_tag");
let const_tag = document.getElementById("const_tag");

// Variable let Redeclare and Redfine
let let_test = "Apty 1.0";
let_tag.innerHTML += `<p id="let-tag-p">Initial Value: ${let_test}</p>`;
let_test = "Apty 2.0";
let_tag.innerHTML += `<p id="let-tag-p">Value After Update: ${let_test}</p>`;
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
