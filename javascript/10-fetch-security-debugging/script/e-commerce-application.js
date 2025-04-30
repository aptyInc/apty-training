const API_BASE_URL = 'https://dummyjson.com/products';
const productListEl = document.getElementById('productList');
const productDetailEl = document.getElementById('productDetail');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const allProductsBtn = document.getElementById('allProductsBtn');


async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        alert('Error fetching all products');
        return [];
    }
}

async function fetchProductById(productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        return await response.json();
    } catch (error) {
        alert('Error fetching product details');
        return null;
    }
}

async function searchProducts(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
        if (!response.ok) throw new Error('Failed to search products');
        const data = await response.json();
        return data.products;
    } catch (error) {
        alert('Error searching products');
        return [];
    }
}

async function renderAllProducts() {
    productListEl.innerHTML = '<p>Loading...</p>';
    const products = await fetchAllProducts();
    if (products.length === 0) {
        productListEl.innerHTML = '<p>No products found</p>';
        return;
    }
    productListEl.innerHTML = products.map(productCardHTML).join('');
    productDetailEl.classList.add('hidden');
}

async function renderProductDetail(productId) {
    productDetailEl.innerHTML = '<p>Loading...</p>';
    const product = await fetchProductById(productId);
    if (!product) return;
    productDetailEl.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <button onclick="renderAllProducts()">Back to Products</button>
    `;
    productDetailEl.classList.remove('hidden');
    productListEl.innerHTML = '';
}

async function renderSearchResults() {
    const query = searchInput.value.trim();
    if (!query) {
        alert('Please enter a search query');
        return;
    }
    productListEl.innerHTML = '<p>Loading...</p>';
    const products = await searchProducts(query);
    if (products.length === 0) {
        productListEl.innerHTML = '<p>No products found</p>';
        return;
    }
    productListEl.innerHTML = products.map(productCardHTML).join('');
    productDetailEl.classList.add('hidden');
}


function productCardHTML(product) {
    return `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="renderProductDetail(${product.id})">View Details</button>
        </div>
    `;
}

allProductsBtn.addEventListener('click', renderAllProducts);
searchBtn.addEventListener('click', renderSearchResults);

renderAllProducts();
