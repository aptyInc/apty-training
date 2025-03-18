// HTML content for the table to be injected into the Shadow DOM
const shadowContent = `
  <main>
    <section class="container">
      <table id="myTable">
        <caption>DOM Manipulation</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Row Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- 10 rows with buttons -->
          <tr>
            <td>1</td>
            <td>Row 1</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Row 2</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Row 3</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Row 4</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Row 5</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Row 6</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Row 7</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Row 8</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Row 9</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Row 10</td>
            <td>
              <button class="moveUpBtn">Up</button>
              <button class="moveDownBtn">Down</button>
              <button class="moveToTopBtn">Top</button>
              <button class="moveToBottomBtn">Bottom</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
`;

// Function to create the Shadow DOM and append the content
function attachContentToShadow() {
  const shadowHost = document.getElementById('shadowHost');
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = shadowContent;
}

// Function to move the row up
function moveUp(button) {
  const row = button.closest('tr');
  const previousRow = row.previousElementSibling;
  if (previousRow) {
    row.parentElement.insertBefore(row, previousRow);
  }
}

// Function to move the row down
function moveDown(button) {
  const row = button.closest('tr');
  const nextRow = row.nextElementSibling;
  if (nextRow) {
    row.parentElement.insertBefore(nextRow, row);
  }
}

// Function to move the row to the top
function moveToTop(button) {
  const row = button.closest('tr');
  const tbody = row.closest('tbody');
  tbody.insertBefore(row, tbody.firstChild);
}

// Function to move the row to the bottom
function moveToBottom(button) {
  const row = button.closest('tr');
  const tbody = row.closest('tbody');
  tbody.appendChild(row);
}

// Attach content to Shadow DOM when page loads
window.onload = function () {
  attachContentToShadow();

  // Adding event listeners to buttons outside Shadow DOM to handle actions
  const shadowHost = document.getElementById('shadowHost');
  const shadowRoot = shadowHost.shadowRoot;

  shadowRoot.querySelectorAll('.moveUpBtn').forEach(button => {
    button.addEventListener('click', () => moveUp(button));
  });
  shadowRoot.querySelectorAll('.moveDownBtn').forEach(button => {
    button.addEventListener('click', () => moveDown(button));
  });
  shadowRoot.querySelectorAll('.moveToTopBtn').forEach(button => {
    button.addEventListener('click', () => moveToTop(button));
  });
  shadowRoot.querySelectorAll('.moveToBottomBtn').forEach(button => {
    button.addEventListener('click', () => moveToBottom(button));
  });
};
