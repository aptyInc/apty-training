async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    showError("Failed to load products");
  }
}

async function loadProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    displayProductDetails(product);
  } catch (error) {
    showError("Failed to load product details");
  }
}

async function searchProducts(query) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    showError("Failed to search products");
  }
}

function displayProducts(products) {
  const content = document.getElementById("content");
  content.innerHTML = '<div class="product-list"></div>';
  const productList = content.querySelector(".product-list");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <button onclick="loadProduct(${product.id})">View Product</button>
        `;
    productList.appendChild(productItem);
  });
}

function displayProductDetails(product) {
  const content = document.getElementById("content");
  content.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <img src="${product.thumbnail}" alt="${product.title}">
        <p>Price: $${product.price}</p>
        <button onclick="loadProducts()">Back to Products</button>
    `;
}

function showSearch() {
  const content = document.getElementById("content");
  content.innerHTML = `
        <input type="text" id="searchQuery" placeholder="Search products...">
        <button onclick="performSearch()">Search</button>
    `;
}

function performSearch() {
  const query = document.getElementById("searchQuery").value;
  if (query) {
    searchProducts(query);
  }
}

function showError(message) {
  const content = document.getElementById("content");
  content.innerHTML = `<p style="color: red;">${message}</p>`;
}
