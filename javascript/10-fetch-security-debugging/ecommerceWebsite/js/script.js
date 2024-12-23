 // API functions
 const BASE_URL = 'https://dummyjson.com';

 async function fetchAllProducts() {
     try {
         const response = await fetch(`${BASE_URL}/products`);
         if (!response.ok) {
             throw new Error('Failed to fetch products');
         }
         const data = await response.json();
         return data.products;
     } catch (error) {
         throw new Error(`Error fetching products: ${error.message}`);
     }
 }

 async function searchProductsAPI(query) {
     try {
         const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
         if (!response.ok) {
             throw new Error('Failed to search products');
         }
         const data = await response.json();
         return data.products;
     } catch (error) {
         throw new Error(`Error searching products: ${error.message}`);
     }
 }

 async function fetchProductById(id) {
     try {
         const response = await fetch(`${BASE_URL}/products/${id}`);
         if (!response.ok) {
             throw new Error('Failed to fetch product details');
         }
         return await response.json();
     } catch (error) {
         throw new Error(`Error fetching product details: ${error.message}`);
     }
 }

 // UI functions
 function showLoading() {
     document.getElementById('loading').style.display = 'block';
     document.getElementById('error').textContent = '';
 }

 function hideLoading() {
     document.getElementById('loading').style.display = 'none';
 }

 function showError(message) {
     document.getElementById('error').textContent = message;
 }

 function createProductCard(product) {
     return `
         <div class="product-card" onclick="viewProduct(${product.id})">
             <img src="${product.thumbnail}" alt="${product.title}">
             <div class="product-title">${product.title}</div>
             <div class="product-price">$${product.price}</div>
             <div class="product-description">${product.description.slice(0, 100)}...</div>
         </div>
     `;
 }

 function displayProducts(products) {
     const container = document.getElementById('productsContainer');
     if (products.length === 0) {
         container.innerHTML = '<p>No products found</p>';
         return;
     }
     container.innerHTML = products.map(product => createProductCard(product)).join('');
 }

 function displayProductDetail(product) {
     const content = `
         <img src="${product.thumbnail}" alt="${product.title}" class="product-detail-image">
         <h2>${product.title}</h2>
         <div class="product-price">$${product.price}</div>
         <p>${product.description}</p>
         <p>Rating: ${product.rating}/5</p>
         <p>Stock: ${product.stock}</p>
         <p>Brand: ${product.brand}</p>
         <p>Category: ${product.category}</p>
     `;
     document.getElementById('productDetailContent').innerHTML = content;
 }

 async function loadAllProducts() {
     try {
         showLoading();
         const products = await fetchAllProducts();
         displayProducts(products);
     } catch (error) {
         showError(error.message);
     } finally {
         hideLoading();
     }
 }

 async function searchProducts() {
     const query = document.getElementById('searchInput').value.trim();
     if (!query) {
         await loadAllProducts();
         return;
     }

     try {
         showLoading();
         const products = await searchProductsAPI(query);
         displayProducts(products);
     } catch (error) {
         showError(error.message);
     } finally {
         hideLoading();
     }
 }

 async function viewProduct(id) {
     try {
         showLoading();
         const product = await fetchProductById(id);
         displayProductDetail(product);
         document.getElementById('mainContent').style.display = 'none';
         document.getElementById('productDetail').style.display = 'block';
     } catch (error) {
         showError(error.message);
     } finally {
         hideLoading();
     }
 }

 function showMainContent() {
     document.getElementById('mainContent').style.display = 'block';
     document.getElementById('productDetail').style.display = 'none';
     document.getElementById('error').textContent = '';
 }


 loadAllProducts();