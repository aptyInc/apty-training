const apiUrl = 'https://dummyjson.com/products';

async function fetchAllProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching all products:', error);
    }
}

async function searchProducts(query) {
    try {
        const response = await fetch(`${apiUrl}/search?q=${query}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

async function displayProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; 
    products.forEach(product => {
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

       const hyperLink = document.createElement("a")
       hyperLink.setAttribute("href","../product-page/index.html")

       const viewingButton = document.createElement('button');
       viewingButton.textContent = 'View';
       viewingButton.className = 'view-button'

       viewingButton.onclick= () => {
          localStorage.setItem("product", product.id)
          
    };
       hyperLink.appendChild(viewingButton)

       productCard.appendChild(title);
       productCard.appendChild(image);
       productCard.appendChild(description);
       productCard.appendChild(price);
       productCard.appendChild(rating);
       productCard.appendChild(stockInfo);
       productCard.appendChild(returnPolicy);
       productCard.appendChild(warrantyInfo);
       
       productCard.appendChild(hyperLink)

       container.appendChild(productCard);
    });
}

async function handleSearch() {
    const query = document.getElementById('searchInput').value;
    const results = await searchProducts(query);
    displayProducts(results);
}

(async () => {
    const products = await fetchAllProducts();
    displayProducts(products);
})();
