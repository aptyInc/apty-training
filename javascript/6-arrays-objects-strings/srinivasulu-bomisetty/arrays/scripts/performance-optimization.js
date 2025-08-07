const largeArray = new Array(10000000).fill(0).map((_, i) => i);

        console.time('For Loop');
        for (let i = 0; i < largeArray.length; i++) {
            const value = largeArray[i];
        }
        console.timeEnd('For Loop');

        console.time('For...of Loop');
        for (const value of largeArray) {
            const val = value;
        }
        console.timeEnd('For...of Loop');

        console.time('forEach');
        largeArray.forEach((value) => {
            const val = value;
        });
        console.timeEnd('forEach');

        const logResults = () => {
            document.getElementById('forLoop').innerText = 'For Loop completed in: ' + performance.now().toFixed(2);
            document.getElementById('forOf').innerText = 'For...of Loop completed in: ' + performance.now() ;
            document.getElementById('forEach').innerText = 'forEach method completed in: ' + performance.now() ;
        };

        logResults();