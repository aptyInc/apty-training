class StackImplementation{
    #array = [];
    #size = 0;

    add(element){
        this.#array.push(element);
        this.#size++;
        return `Inserted the value successfully 🎉`
    }

    remove(){
        if(this.#size === 0){
            return `Stack is empty`;
        }
        this.#size--;
        return `Removed the element successfully 🎉${this.#array.pop()}`;
    }
    
    isEmpty(){
        return `Stack is ${this.#size === 0 ? "empty" : "not empty"} `;
    }

    showStack(){
        return this.#array;
    }

}

const stack = new StackImplementation();

function display_output(result){
    const output_div = document.querySelector('.output');
    const fina_stack = document.querySelector('.final_stack');
    output_div.innerText = result;
    fina_stack.innerText = stack.showStack();
}

function handleOnSubmit(event){
    event.preventDefault();
    const input_by_user = document.querySelector('#stack_element').value;

    const add_in_stack = stack.add(input_by_user);
    display_output(add_in_stack);
}

function removeTheElement(){
    const removed_element = stack.remove();
    display_output(removed_element);
}

function isStackEmpty(){
    display_output(stack.isEmpty());
}