let num=1;
let str="A";
let bol=true;
let un=undefined;
let nu=null;
let sy=Symbol();
let ob={1:2}



document.getElementById("number_number").innerHTML=`number+number:${num+num}`;
document.getElementById("number_string").innerHTML=`number+string:${num+str}`;
document.getElementById("number_bool").innerHTML=`number+boolean:${num+bol}`;
document.getElementById("number_und").innerHTML=`number+undefined: ${num+un}`;
document.getElementById("number_nu").innerHTML=`number+null :${num+nu}`;
document.getElementById("number_sy").innerHTML=`number+symabool Cannot convert a Symbol value to a number
`;
document.getElementById("number_obj").innerHTML=`number+object:${num+ob}`;


document.getElementById("string_number").innerHTML=`string+number:${str+num}`;
document.getElementById("string_string").innerHTML=`string+string:${str+str}`;
document.getElementById("string_bool").innerHTML=`string+boolean:${str+bol}`;
document.getElementById("string_und").innerHTML=`string+undefined:${str+un}`;
document.getElementById("string_nu").innerHTML=`string+null :${str+nu}`;
document.getElementById("string_sy").innerHTML=`string+symabool  Cannot convert a Symbol value to a string`;
document.getElementById("string_obj").innerHTML=`string+object:${str+ob}`

document.getElementById("bool_number").innerHTML=`bool+number:${bol+num}`;
document.getElementById("bool_string").innerHTML=`bool+string:${bol+str}`;
document.getElementById("bool_bool").innerHTML=`bool+boolean:${bol+bol}`;
document.getElementById("bool_und").innerHTML=`bool+undefined ${bol+undefined}`;
document.getElementById("bool_nu").innerHTML=`bool+null ${bol+nu}`;
document.getElementById("bool_sy").innerHTML=`bool+symbool Cannot convert a Symbol value to a number
`;
document.getElementById("bool_obj").innerHTML=`bool+object:${bol+ob}`;

document.getElementById("und_number").innerHTML=`undefined+number:${un+num}`;
document.getElementById("und_string").innerHTML=`undefined+string:${un+str}`;
document.getElementById("und_bool").innerHTML=`undefined+boolean:${un+bol}`;
document.getElementById("und_und").innerHTML=`undefined+undefined:${un+un}`;
document.getElementById("und_nu").innerHTML=`undefined+null :${un+nu}`;
document.getElementById("und_sy").innerHTML=`undefined+symabool Cannot convert a Symbol value to a number
`;

document.getElementById("und_obj").innerHTML=`undefined+boolean:${un+bol}`;

document.getElementById("nu_number").innerHTML=`null+number:${nu+num}`;
document.getElementById("nu_string").innerHTML=`null+string:${nu+str}`;
document.getElementById("nu_bool").innerHTML=`null+boolean:${nu+bol}`;
document.getElementById("nu_und").innerHTML=`null+undefined: ${nu+un}`;
document.getElementById("nu_nu").innerHTML=`null+null :${nu+nu}`;
document.getElementById("nu_sy").innerHTML=`null+symabool :Cannot convert a Symbol value to a number
`;
document.getElementById("nu_obj").innerHTML=`null+boolean:${nu+ob}`;


document.getElementById("obj_number").innerHTML=`object+number:${ob+num}`;
document.getElementById("obj_string").innerHTML=`object+string:${ob+str}`;
document.getElementById("obj_bool").innerHTML=`object+boolean:${ob+bol}`;
document.getElementById("obj_und").innerHTML=`object+undefined: ${ob+un}`;
document.getElementById("obj_nu").innerHTML=`object+null :${ob+nu}`;
document.getElementById("obj_sy").innerHTML=`object+symabool:Cannot convert a Symbol value to a string
`;
document.getElementById("obj_obj").innerHTML=`object+boolean:${ob+ob}`;