let template_literal = document.getElementById("template_literal");

function working_of_template_literal() {
  let myName = "Harsh";

  let age = 23;

  let working_or_not = true;

  let undefined_var;

  let object_var = {
    employee1: "harsh",
    employee2: "sai",
  };

  let symbol_var = Symbol("Apty");

  template_literal.innerHTML = `My name is ${myName}. My age is ${age}. Am I currently working ? 
    ${working_or_not}. I am testing the undefined var by type of ${typeof undefined_var}. My employee 1 name is ${
    object_var.employee1
  } and employee 2 name is ${object_var.employee2}.
    My company name is in Symbol  ${symbol_var.toString()}`;
}
working_of_template_literal();
