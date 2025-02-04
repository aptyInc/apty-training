let stringVar = "Hello";
        let numberVar = 42;
        let booleanVar = true;
        let undefinedVar;
        let nullVar = null;
        let symbolVar = Symbol("unique");
        let objectVar = { name: "srinu", age: 30 };

        let resultString = `
            <p><strong>String Variable:</strong> ${stringVar}</p>
            <p><strong>Number Variable:</strong> ${numberVar}</p>
            <p><strong>Boolean Variable:</strong> ${booleanVar}</p>
            <p><strong>Undefined Variable:</strong> ${undefinedVar}</p>
            <p><strong>Null Variable:</strong> ${nullVar}</p>
            <p><strong>Object Variable :</strong> ${objectVar}</p>
        `;

        document.getElementById("result").innerHTML = resultString;