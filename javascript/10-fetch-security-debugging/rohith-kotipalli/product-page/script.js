const apiUrl = 'https://dummyjson.com/products';

async function fetchProductById(productId) {
    try {
        const response = await fetch(`${apiUrl}/${productId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const product = await response.json();
        return product;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
    }
}


function displayProductDetails(product) {
    const container = document.getElementById('productContainer');
 
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
 
    const title = document.createElement('h2');
    title.textContent = product.title;
 
    const image = document.createElement('img');
    image.src = product.thumbnail;
    image.alt = product.title;
 
    const description = document.createElement('p');
    description.textContent = product.description;
 
    const price = document.createElement('p');
    price.textContent = `Price: $${product.price.toFixed(2)}`;
 
    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating} / 5`;
 
    const stockInfo = document.createElement('p');
    stockInfo.textContent = `Availability Status: ${product.availabilityStatus} (Stock left: ${product.stock})`;
 
    const returnPolicy = document.createElement('p');
    returnPolicy.textContent = `Return Policy: ${product.returnPolicy}`;
 
    const warrantyInfo = document.createElement('p');
    warrantyInfo.textContent = `Warranty Information: ${product.warrantyInformation}`;
 
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.className = 'add-to-cart-button';
 
    addToCartButton.addEventListener('click', () => {
        alert(`${product.title} has been added to your cart!`);
    });
 
    productCard.appendChild(title);
    productCard.appendChild(image);
    productCard.appendChild(description);
    productCard.appendChild(price);
    productCard.appendChild(rating);
    productCard.appendChild(stockInfo);
    productCard.appendChild(returnPolicy);
    productCard.appendChild(warrantyInfo);
    productCard.appendChild(addToCartButton); 
 
    container.appendChild(productCard);
 }
 
 window.onload = async (e) => {
    let b = localStorage.getItem("product")
    const product = await fetchProductById(b);
    displayProductDetails(product)
}