let num=1;
    let str="A";
    let bol=true;
    let un=undefined;
    let nu=null;
    let sy=Symbol();
    let ob={1:2}
  
  
  
    document.getElementById("number_number").innerHTML=`to number:${Number(num)}`;
    document.getElementById("number_string").innerHTML=`to string:${String(num)}`;
    document.getElementById("number_bool").innerHTML=`to boolean:${Boolean(num)}`;
    document.getElementById("number_und").innerHTML="to undefined: N/A";
    document.getElementById("number_nu").innerHTML="to null :N/A";
    document.getElementById("number_sy").innerHTML="to symabool N/A";
    document.getElementById("number_obj").innerHTML=`to object:${Object(num)}`;


    document.getElementById("string_number").innerHTML=`to number:${Number(str)}`;
    document.getElementById("string_string").innerHTML=`to string:${String(str)}`;
    document.getElementById("string_bool").innerHTML=`to boolean:${Boolean(str)}`;
    document.getElementById("string_und").innerHTML="to undefined: N/A";
    document.getElementById("string_nu").innerHTML="to null :N/A";
    document.getElementById("string_sy").innerHTML="to symabool N/A";
    document.getElementById("string_obj").innerHTML=`to object:${Object(str)}`

    document.getElementById("bool_number").innerHTML=`to number:${Number(bol)}`;
    document.getElementById("bool_string").innerHTML=`to string:${String(bol)}`;
    document.getElementById("bool_bool").innerHTML=`to boolean:${Boolean(bol)}`;
    document.getElementById("bool_und").innerHTML="to undefined: N/A";
    document.getElementById("bool_nu").innerHTML="to null :N/A";
    document.getElementById("bool_sy").innerHTML="to symabool N/A";
    document.getElementById("bool_obj").innerHTML=`to object:${Object(bol)}`;

    document.getElementById("und_number").innerHTML=`to number:${Number(un)}`;
    document.getElementById("und_string").innerHTML=`to string:${String(un)}`;
    document.getElementById("und_bool").innerHTML=`to boolean:${Boolean(un)}`;
    document.getElementById("und_und").innerHTML="to undefined: N/A";
    document.getElementById("und_nu").innerHTML="to null :N/A";
    document.getElementById("und_sy").innerHTML="to symabool N/A";

    document.getElementById("und_obj").innerHTML=`to boolean:${Object(un)}`;
    
    document.getElementById("nu_number").innerHTML=`to number:${Number(nu)}`;
    document.getElementById("nu_string").innerHTML=`to string:${String(nu)}`;
    document.getElementById("nu_bool").innerHTML=`to boolean:${Boolean(nu)}`;
    document.getElementById("nu_und").innerHTML="to undefined: N/A";
    document.getElementById("nu_nu").innerHTML="to null :N/A";
    document.getElementById("nu_sy").innerHTML="to symabool N/A";
    document.getElementById("nu_obj").innerHTML=`to boolean:${Object(nu)}`;

    document.getElementById("sy_number").innerHTML=`to number:N/A`;
    document.getElementById("sy_string").innerHTML=`to string N/A`;
    document.getElementById("sy_bool").innerHTML=`to boolean: N/A`;
    document.getElementById("sy_und").innerHTML="to undefined: N/A";
    document.getElementById("sy_nu").innerHTML="to null :N/A";
    document.getElementById("sy_sy").innerHTML="to symabool N/A";
    document.getElementById("sy_obj").innerHTML=`to boolean:N/A`;

    document.getElementById("obj_number").innerHTML=`to number:${Number(ob)}`;
    document.getElementById("obj_string").innerHTML=`to string:${String(ob)}`;
    document.getElementById("obj_bool").innerHTML=`to boolean:${Boolean(ob)}`;
    document.getElementById("obj_und").innerHTML="to undefined: N/A";
    document.getElementById("obj_nu").innerHTML="to null :N/A";
    document.getElementById("obj_sy").innerHTML="to symabool N/A";
    document.getElementById("obj_obj").innerHTML=`to boolean:${Object(ob)}`;