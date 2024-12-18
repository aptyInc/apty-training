//string start
// conversion of string to number
function myString1() {
    let num1 = 3; 
    let text1 = "hello"; 

    let result1 = Number(text1);

    const element1 = document.getElementById("string1");
    element1.innerHTML = result1;
}
myString1();

// conversion of string to boolean
function myString2() {
    let text2 = "hello"; 

    let result2 = Boolean(text2); 

    const element2 = document.getElementById("string2");
    element2.innerHTML = result2;
}
myString2();

// conversion of string to undefined
function myString3() {
    let text3 = "hello"; 

    let result3;

    const element3 = document.getElementById("string3");
    element3.innerHTML = result3;
}
myString3();

// conversion of string to null
function myString4() {
    let text4 = "hello"; 

    let result4 = null; 

    const element4 = document.getElementById("string4");
    element4.innerHTML = result4;
}
myString4();

// conversion of string to object
function myString5() {
    let text5 = "hello"; 

    let result5 = Object(text5); 
    const element5 = document.getElementById("string5");
    element5.innerHTML = result5;
}
myString5();

//string end 
//number start

// conversion of number to string
function myNumber1() {
    let num6 = 3; 

    let result6 = String(num6); 

    const element6 = document.getElementById("number1");
    element6.innerHTML = result6;
}
myNumber1();

// conversion of number to boolean
function myNumber2() {
    let num7 = 3; 

    let result7 = Boolean(num7); 

    const element7 = document.getElementById("number2");
    element7.innerHTML = result7;
}
myNumber2();

// conversion of number to undefined
function myNumber3() {
    let num8 = 3; 

    let result8; 

    const element8 = document.getElementById("number3");
    element8.innerHTML = result8;
}
myNumber3();

// conversion of number to null
function myNumber4() {
    let num9 = 3; 

    let result9 = null; 

    const element9 = document.getElementById("number4");
    element9.innerHTML = result9;
}
myNumber4();

//conversion of number to object
function myNumber5() {
    let num10 = 3; 

    let result10 = Object(num10); 

    const element10 = document.getElementById("number5");
    element10.innerHTML = result10;
}
myNumber5();

//number end
//boolean start

// conversion of boolean to string
function myBoolean1() {
    let num11 = true; 

    let result11 = String(num11); 

    const element11 = document.getElementById("boolean1");
    element11.innerHTML = result11;
}
myBoolean1();

// conversion of boolean to number
function myBoolean2() {
    let num12 = true; 

    let result12 = Number(num12); 

    const element12 = document.getElementById("boolean2");
    element12.innerHTML = result12;
}
myBoolean2();

// conversion of boolean to undefined
function myBoolean3() {
    let num13 = true; 

    let result13;

    const element13 = document.getElementById("boolean3");
    element13.innerHTML = result13;
}
myBoolean3();

// conversion of boolean to null
function myBoolean4() {
    let num14 = true; 

    let result14 = null; 

    const element14 = document.getElementById("boolean4");
    element14.innerHTML = result14;
}
myBoolean4();

// conversion of boolean to object
function myBoolean5() {
    let num15 = true; 

    let result15 = Object(num15); 

    const element15 = document.getElementById("boolean5");
    element15.innerHTML = result15;
}
myBoolean5();

//boolean end
//undefined start

// conversion of undefined to string
function myUndefined1() {
    let num16 = undefined; 

    const result16 = String(num16);

    const element16 = document.getElementById("undefined1");
    element16.innerHTML = result16;
}
myUndefined1();

// conversion of undefined to number
function myUndefined2() {
    let num17 = undefined; 

    const result17 = Number(num17); 

    const element17 = document.getElementById("undefined2");
    element17.innerHTML = result17;
}
myUndefined2();

// conversion of undefined to boolean
function myUndefined3() {
    let num18 = undefined; 

    const result18 = Boolean(num18);

    const element18 = document.getElementById("undefined3");
    element18.innerHTML = result18;
}
myUndefined3();

// conversion of undefined to null
function myUndefined4() {
    let num20 = undefined; 

    const result20 = null; 

    const element20 = document.getElementById("undefined4");
    element20.innerHTML = result20;
}
myUndefined4();

// conversion of undefined to object
function myUndefined5() {
    let num21 = undefined; 

    let result21 = Object(num21) ; 

    const element21 = document.getElementById("undefined5");
    element21.innerHTML = result21;
}
myUndefined5();

//undefined end
//null start

// conversion of null to string
function myNull1() {
    let num22 = null; 

    let result22 = String(num22); 

    const element22 = document.getElementById("null1");
    element22.innerHTML = result22;
}
myNull1();

// conversion of null to number
function myNull2() {
    let num23 = null; 

    let result23 = Number(num23);

    const element23 = document.getElementById("null2");
    element23.innerHTML = result23;
}
myNull2();

// conversion of null to boolean
function myNull3() {
    let num24 = null; 

    let result24 = Boolean(num24); 

    const element24 = document.getElementById("null3");
    element24.innerHTML = result24;
}
myNull3();

// conversion of null to undefined
function myNull4() {
    let num25 = null; 

    let result25; 

    const element25 = document.getElementById("null4");
    element25.innerHTML = result25;
}
myNull4();

// conversion of null to object
function myNull5() {
    let num26 = null; 

    let result26 = Object(num26); 

    const element26 = document.getElementById("null5");
    element26.innerHTML = result26;
}
myNull5();

//null end
//object start 

// conversion of object to string
function myObject1() {
    const text27 = { name: "Alice", age: 30 }; 

    let result27 = String(text27); 

    const element27 = document.getElementById("object1");
    element27.innerHTML = result27;
}
myObject1();

// Conversion of object to number
function myObject2() {
    const text28 = { name: "Alice", age: 30 }; 

    const result28 = Number(text28); 

    const element28 = document.getElementById("object2");
    element28.innerHTML = result28;
}
myObject2();

// Conversion of object to boolean
function myObject3() {
    const text29 = { name: "Alice", age: 30 }; 

    const result29 = Boolean(text29);

    const element29 = document.getElementById("object3");
    element29.innerHTML = result29;
}
myObject3();

// Conversion of object to number
function myObject4() {
    const text30 = { name: "Alice", age: 30 }; 

    const result30 = Number(text30);  

    const element30 = document.getElementById("object4");
    element30.innerHTML = result30;
}
myObject4();

// Conversion of object to null
function myObject5() {
    const text31 = { name: "Alice", age: 30 }; 

    const result31 = null;  

    const element31 = document.getElementById("object5");
    element31.innerHTML = result31;
}
myObject5();





