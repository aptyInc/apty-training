const iframe = document.getElementById('tableIframe');
        const iframeContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #ccc;
                        padding: 10px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Array.from({ length: 10 }, (_, i) => `
                            <tr id="row${i + 1}">
                                <td>${i + 1}</td>
                                <td>Row ${i + 1}</td>
                                <td>
                                    <button class="up">Up</button>
                                    <button class="down">Down</button>
                                    <button class="top">Top</button>
                                    <button class="bottom">Bottom</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
            </html>
        `;

        iframe.contentDocument.open();
        iframe.contentDocument.write(iframeContent);
        iframe.contentDocument.close();

        const iframeDoc = iframe.contentDocument;

        iframeDoc.querySelectorAll('button.up').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const previousRow = row.previousElementSibling;
                if (previousRow) {
                    row.parentNode.insertBefore(row, previousRow);
                }
            });
        });

        iframeDoc.querySelectorAll('button.down').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const nextRow = row.nextElementSibling;
                if (nextRow) {
                    row.parentNode.insertBefore(nextRow, row);
                }
            });
        });

        iframeDoc.querySelectorAll('button.top').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const tableBody = row.parentNode;
                tableBody.insertBefore(row, tableBody.firstElementChild);
            });
        });

        iframeDoc.querySelectorAll('button.bottom').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const tableBody = row.parentNode;
                tableBody.appendChild(row);
            });
        });