const apiUrl = "https://dummyjson.com/products";

async function fetchAllProducts() {
    try {
        const response = await fetch(apiUrl);
        console.error(response);
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.status}`);
        }
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error(error);
        alert("Failed to fetch products. Please try again later.");
    }
}
async function searchProducts() {
    const query = document.getElementById("searchInput").value;
    if (!query) {
        alert("Please enter a search term.");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}/search?q=${query}`);
        if (!response.ok) {
            throw new Error(`Error searching products: ${response.status}`);
        }
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error(error);
        alert("Failed to search products. Please try again later.");
    }
}

async function fetchProductById(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.status}`);
        }
        const product = await response.json();
        displaySingleProduct(product);
    } catch (error) {
        console.error(error);
        alert("Failed to fetch product. Please try again later.");
    }
}

function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        console.log(product);
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p><strong>Price:</strong> $${product.price}</p>
          <button onclick="fetchProductById(${product.id})">View Details</button>
        `;
        productList.appendChild(productDiv);
    });
}


function displaySingleProduct(product) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    const productDiv = document.createElement("div");
    productDiv.className = "product1";
    productDiv.innerHTML = `
        <div class="text">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Rating:<strong>${product.rating}</p>
        <button onclick="fetchAllProducts()">Back to Products</button>
        </div>
        <span><img src="${product.thumbnail}" alt="${product.title}"></span>
      `;
    productList.appendChild(productDiv);
}

window.onload = fetchAllProducts;