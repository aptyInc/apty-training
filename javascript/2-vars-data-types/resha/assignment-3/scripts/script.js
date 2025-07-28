const output1 = document.getElementById('output1');

        let str = "Rio Kadve";
        output.innerHTML += `Name is ${str} and Type is ${typeof str}<br><br>`;

        let age = 6;
        output.innerHTML += `His age is ${age} and Type is ${typeof age}<br><br>`;

        let x = true;
        output.innerHTML += `Value is ${x} and Type is ${typeof x}<br><br>`;

        let y;
        output.innerHTML += `Value is ${y} and Type is ${typeof y}<br><br>`;

        let z = null;
        output.innerHTML += `Value is ${z} and Type is ${typeof z}<br><br>`;

        let obj = { name: 'apple' };
        output.innerHTML += `Value is ${JSON.stringify(obj)} and Type is ${typeof obj}<br><br>`;

        let sym = Symbol('id');
        output.innerHTML += `Value is ${sym.toString()} and Type is ${typeof sym}<br><br>`;