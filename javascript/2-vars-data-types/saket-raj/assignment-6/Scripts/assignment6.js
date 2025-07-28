let fullName = "Saket Raj";
      let age = 22;
      let isFollow = true;
      let Undefined = undefined;
      let Null = null;
      let symbol = Symbol("Apty!");
      let loc = { Area: "hyd", PinCode: 500081 };

      let greeting = `Hey, my name is ${fullName}. 
      I am ${age} years old, currently I am working at ${symbol.toString()}. 
      I stay in ${loc.Area}, ${loc.PinCode}. 
      My phone number is ${Undefined} and ${Null}. 
      Do I follow you? ${isFollow}.`;

      document.getElementById("about").innerHTML = greeting;