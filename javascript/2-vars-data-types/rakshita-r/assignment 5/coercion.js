
//String+String=String
const myString="5";
const conva=myString+myString;
console.log(conva);


const myString1="5";
const mynum1=10;
const convb=myString+mynum1;
console.log(convb);

const myString2="Hi";
const mybol=true;
const convc=myString2+mybol;
console.log(convc);


const myString3="Hi";
const myund2="undefined";
const convd=myString3+myund2;
console.log(convd);


const myString4="10";
const empt=" ";
const conve=myString4+empt;
console.log(conve);

const myString5="10";
const null1="null";
const convf=myString5+null;
console.log(convf);

const myString6="10";
const obj2={"name":"rakshita"};
const convg=myString6+obj2;
console.log(convg);


const num1=10;
const num2=20;
const convh=num1+num2;
console.log(convh);

const num3=10;
const str2="20";
const convi=num1+str2;
console.log(convi);

const num4=10;
const str3=" ";
const convj=num4+str3;
console.log(convj);

const num5=10;
const str4=true;
const convk=num5+str4;
console.log(convk);

const num6=10;
const str5="null";
const convl=num6+str5;
console.log(convl);

const num7=10;
const obj={"name":"raksh"}
const convm=num7+obj;
console.log(convm);

let results = `
            String + String: ${conva} :${typeof conva}<br>
            String+Number:${convb}:${typeof convb}<br>
            String+Boolean:${convc}:${typeof convc}<br>
            String+Undefined:${convd}:${typeof convd}<br>
            String+Empty String:${conve}:${typeof conve}<br>
            String+Null:${convf}:${typeof convf}<br>
            String+object:${convg}:${typeof convg}<br>
            Number+Number:${convh}:${typeof convh}<br>
            Number+String:${convi}:${typeof convi}<br>
            Number+Empty String:${convj}:${typeof convj}<br>
            Number+Boolean:${convk}:${typeof convk}<br>
            Number+null:${convl}:${typeof convl}<br>
            Number+obj:${convm}:${typeof convm}<br>

        `;

document.getElementById("coercion").innerHTML = results;
