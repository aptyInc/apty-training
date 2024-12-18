function Stack() {


    this.items = [];
    this.push = function(element) {

        this.items.push(element);

    };

    this.pop = function() {
        if (this.items.length === 0) {

            return "stack is empty";
        }
        return this.items.pop();
    };
    
    this.isEmpty = function() {

        return this.items.length === 0;
    };
    this.top = function() {

        if (this.items.length === 0) {
            return "stack is empty";
        }
        return this.items[this.items.length - 1];

    };

}

var stack = new Stack();


function pushStack() {

    var element = prompt("enter an element to push");


    stack.push(element);
    document.getElementById("result").innerText = "pushed: " + element;

}

function popStack() {
    var popped = stack.pop();
    document.getElementById("result").innerText = "popped " + popped;

}

function checkEmpty() {
    var empty = stack.isEmpty();
    document.getElementById("result").innerText = "stack empty " + empty;

}

function firstElement() {

    var top = stack.top();
    document.getElementById("result").innerText = "first element " + top;

}
