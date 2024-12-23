let newWindow; 

        function openWindow() {
            newWindow = window.open("https://www.google.com/", "", 'width=600,height=400');
        }

        function closeWindow() {
            newWindow?.close(); 
            newWindow = null;  
        }

        function resizeWindow() {
            newWindow?.resizeTo(800, 600);
        }