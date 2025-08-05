class queueImplementation{
    #array = [];
    #size = 0;

    add(element){
        this.#array.push(element);
        this.#size++;
        return `Inserted the value successfully 🎉`
    }

    remove(){
        if(this.#size === 0){
            return `queue is empty`;
        }
        this.#size--;
        return `Removed the element successfully 🎉${this.#array.shift()}`;
    }
    
    isEmpty(){
        return `queue is ${this.#size === 0 ? "empty" : "not empty"} `;
    }

    showqueue(){
        return this.#array;
    }

}

const queue = new queueImplementation();

function display_output(result){
    const output_div = document.querySelector('.output');
    const fina_queue = document.querySelector('.final_queue');
    output_div.innerText = result;
    fina_queue.innerText = queue.showqueue();
}

function handleOnSubmit(event){
    event.preventDefault();
    const input_by_user = document.querySelector('#queue_element').value;

    const add_in_queue = queue.add(input_by_user);
    display_output(add_in_queue);
}

function removeTheElement(){
    const removed_element = queue.remove();
    display_output(removed_element);
}

function isqueueEmpty(){
    display_output(queue.isEmpty());
}