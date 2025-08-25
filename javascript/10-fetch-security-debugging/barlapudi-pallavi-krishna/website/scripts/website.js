// Show specific page
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Fetch All Products
async function fetchAllProducts() {
  try {
    let res = await fetch('https://dummyjson.com/products');
    if (!res.ok) throw new Error("Failed to fetch products");
    let data = await res.json();
    displayProducts(data.products, "all-products");
  } catch (error) {
    document.getElementById("all-products").innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Search Products
async function searchProducts() {
  let query = document.getElementById("search-input").value.trim();
  if (!query) {
    document.getElementById("search-results").innerHTML = `<p class="error">Please enter a search term</p>`;
    return;
  }
  try {
    let res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!res.ok) throw new Error("Failed to search products");
    let data = await res.json();
    if (data.products.length === 0) {
      document.getElementById("search-results").innerHTML = `<p>No products found</p>`;
    } else {
      displayProducts(data.products, "search-results");
    }
  } catch (error) {
    document.getElementById("search-results").innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Get Product by ID
async function getProduct() {
  let id = document.getElementById("product-id").value;
  if (!id) {
    document.getElementById("product-details").innerHTML = `<p class="error">Enter a valid ID</p>`;
    return;
  }
  try {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    let product = await res.json();
    document.getElementById("product-details").innerHTML = `
      <div class="product" onclick="openModal(${product.id}, '${product.title}', '${product.thumbnail}', '${product.description}', ${product.price})">
        <h3>${product.title}</h3>
        <img src="${product.thumbnail}" alt="${product.title}">
        <p><strong>Price:</strong> $${product.price}</p>
        <p>${product.description}</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("product-details").innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Display product list with clickable cards
function displayProducts(products, elementId) {
  let container = document.getElementById(elementId);
  container.innerHTML = products.map(p => `
    <div class="product" onclick="openModal(${p.id}, '${p.title}', '${p.thumbnail}', '${p.description}', ${p.price})">
      <h3>${p.title}</h3>
      <img src="${p.thumbnail}" alt="${p.title}">
      <p><strong>Price:</strong> $${p.price}</p>
    </div>
  `).join("");
}

// Open modal with product details
function openModal(id, title, img, desc, price) {
  let modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h2>${title}</h2>
    <img src="${img}" alt="${title}">
    <p><strong>Price:</strong> $${price}</p>
    <p>${desc}</p>
  `;
  document.getElementById("product-modal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

// Close modal if user clicks outside content
window.onclick = function(event) {
  let modal = document.getElementById("product-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Load all products by default
fetchAllProducts();
