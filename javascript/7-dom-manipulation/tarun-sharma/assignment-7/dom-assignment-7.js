let visibleIndex = 0;
        document.getElementById('trigger').addEventListener('click', function() {

            const divs = document.querySelectorAll('div');

            divs.forEach(div => {
                div.style.display = 'none';

            });

      
            if (divs[visibleIndex]) {
                divs[visibleIndex].style.display = 'block';
            }
           
            visibleIndex = (visibleIndex + 1) % divs.length;
        });


        const divs = document.querySelectorAll('div');

        divs.forEach((div, index) => {
            div.style.display = index === 0 ? 'block' : 'none';

        });