let name="madhuri";
let dob="2003";
let allInfo=true;
let cell=undefined;
let company={name:"apty", role:"technical consultant"};
const result=document.getElementById("intro");
function greet(){
    const greeting = `Hi sir <br /> Here is my Js template and datatype assignment about me <br> My name is ${name} and my date of birth year is ${dob} and I am working as ${company.role} in ${company.name} <br> All Info about me is ${allInfo}.`;
    document.write(greeting)
}
greet();
