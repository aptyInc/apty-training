function deepMerge(target, source) {

    for (var key in source) {

        if (typeof source[key] === "object" && !Array.isArray(source[key])) {

            if (!target[key]) {

                target[key] = {};
            }
            
            deepMerge(target[key], source[key]);

        } else {

            target[key] = source[key];
        }
    }

    return target;
}

function mergeObjects() {

    var obj1 = { a: 1, b: { x: 10 } };

    var obj2 = { b: { y: 20 }, c: 3 };
    var result = deepMerge(obj1, obj2);

    document.getElementById("result").innerText = JSON.stringify(result);
    


}
