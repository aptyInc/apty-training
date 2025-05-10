function sendMessageToParent() {

    parent.postMessage('Hello Parent!', window.location.origin);
    
}




window.addEventListener('message', function(event) {

    if (event.origin === window.location.origin) { 

        document.getElementById('messageFromParent').innerText = 'Message from Parent: ' + event.data;
    }

});