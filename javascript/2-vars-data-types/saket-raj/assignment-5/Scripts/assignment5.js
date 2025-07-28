let Number = 5;
      let Strings = "10";
      let isFollow = true;
      let Undefined = undefined;
      let NULL = null;
      let Sym = Symbol("Hello!");
      let student = { rollno: 10 };

      let result_num = "";
      result_num += "Number + String: " + (Number + Strings) + "<br>";
      result_num += "Number + Boolean: " + (Number + isFollow) + "<br>";
      result_num += "Number + Undefined: " + (Number + Undefined) + "<br>";
      result_num += "Number + Null: " + (Number + NULL) + "<br>";
      //result_num += "Number + Symbol: " + (Number + Sym) + "<br>";   -> getting error VM273:1 Uncaught TypeError: Cannot convert a Symbol value to a number

      result_num += "Number + Object: " + (Number + student.rollno) + "<br>";
      //printing o/p
      document.getElementById("output-num").innerHTML =
        "Number Additions:<br>" + result_num;

      let result_str = "";
      result_str += "String + Number: " + (Strings + Number) + "<br>";
      result_str += "String + Boolean: " + (Strings + isFollow) + "<br>";
      result_str += "String + Undefined: " + (Strings + Undefined) + "<br>";
      result_str += "String + Null: " + (Strings + NULL) + "<br>";
      result_str += "String + Object: " + (Strings + student.rollno) + "<br>";
      document.getElementById("output-str").innerHTML =
        "String Additions:<br>" + result_str;

      let result_bool = "";
      result_bool += "Boolean + Number: " + (isFollow + Number) + "<br>";
      result_bool += "Boolean + String: " + (isFollow + Strings) + "<br>";
      result_bool += "Boolean + Undefined: " + (isFollow + Undefined) + "<br>";
      result_bool += "Boolean + Null: " + (isFollow + NULL) + "<br>";
      result_bool +=
        "Boolean + Object: " + (isFollow + student.rollno) + "<br>";
      document.getElementById("output-bool").innerHTML =
        "Boolean Additions:<br>" + result_bool;

      let result_undef = "";
      result_undef += "Undefined + Number: " + (Undefined + Number) + "<br>";
      result_undef += "Undefined + String: " + (Undefined + Strings) + "<br>";
      result_undef += "Undefined + Boolean: " + (Undefined + isFollow) + "<br>";
      result_undef += "Undefined + Null: " + (Undefined + NULL) + "<br>";
      result_undef +=
        "Undefined + Object: " + (Undefined + student.rollno) + "<br>";
      document.getElementById("output-undef").innerHTML =
        "Undefined Additions:<br>" + result_undef;

      let result_null = "";
      result_null += "Null + Number: " + (NULL + Number) + "<br>";
      result_null += "Null + String: " + (NULL + Strings) + "<br>";
      result_null += "Null + Boolean: " + (NULL + isFollow) + "<br>";
      result_null += "Null + Undefined: " + (NULL + Undefined) + "<br>";
      result_null += "Null + Object: " + (NULL + student.rollno) + "<br>";
      document.getElementById("output-null").innerHTML =
        "Null Additions:<br>" + result_null;

      let result_sym =
        "getting error VM273:1 Uncaught TypeError: Cannot convert a Symbol value to a ...";
      document.getElementById("output-sym").innerHTML =
        "Symbol Additions:<br>" + result_sym;

      let result_obj = "";
      result_obj += "Object + Number: " + (student.rollno + Number) + "<br>";
      result_obj += "Object + String: " + (student.rollno + Strings) + "<br>";
      result_obj += "Object + Boolean: " + (student.rollno + isFollow) + "<br>";
      result_obj +=
        "Object + Undefined: " + (student.rollno + Undefined) + "<br>";
      result_obj += "Object + Null: " + (student.rollno + NULL) + "<br>";
      document.getElementById("output-obj").innerHTML =
        "Object Additions:<br>" + result_obj;