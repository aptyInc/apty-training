const shadowContent = `
            <style>
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
        `;

        const shadowHost = document.getElementById('shadow-host');
        const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = shadowContent;

        const table = shadowRoot.querySelector('#myTable');

        shadowRoot.querySelectorAll('button.up').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const previousRow = row.previousElementSibling;
                if (previousRow) {
                    row.parentNode.insertBefore(row, previousRow);
                }
            });
        });

        shadowRoot.querySelectorAll('button.down').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const nextRow = row.nextElementSibling;
                if (nextRow) {
                    row.parentNode.insertBefore(nextRow, row);
                }
            });
        });

        shadowRoot.querySelectorAll('button.top').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const tableBody = row.parentNode;
                tableBody.insertBefore(row, tableBody.firstElementChild);
            });
        });

        shadowRoot.querySelectorAll('button.bottom').forEach(button => {
            button.addEventListener('click', function () {
                const row = this.closest('tr');
                const tableBody = row.parentNode;
                tableBody.appendChild(row);
            });
        });