let currentDiv = 1;

        document.getElementById('toggleButton').addEventListener('click', function() {
            const div1 = document.getElementById('div1');
            const div2 = document.getElementById('div2');
            const div3 = document.getElementById('div3');

            // Show the current div
            if (currentDiv === 1) {
                div1.classList.toggle("hidden");
                div2.classList.toggle("hidden");
                currentDiv = 2
            } else if (currentDiv === 2) {
                div2.classList.toggle('hidden');
                div3.classList.toggle("hidden")
                currentDiv = 3
            } else if (currentDiv === 3) {
                div3.classList.toggle('hidden');
                div1.classList.toggle("hidden")
                currentDiv = 1
            }


        });