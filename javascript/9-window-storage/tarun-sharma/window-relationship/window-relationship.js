let childWindow;
        
function openChild() {
    childWindow = window.open('window-relationship-child.html', '', 'width=600,height=400');
}

window.addEventListener('message', function(event) {

    if (event.origin === window.location.origin) { 

        document.getElementById('messageFromChild').innerText = 'Message from Child: ' + event.data;

    }

});
     
function sendMessageToChild(message) {

    childWindow?.postMessage(message, window.location.origin);

}