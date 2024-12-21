const API_URL = "https://dummyjson.com/products";

async function fetchAllProducts() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();

		return data.products;
	} catch (error) {
		console.error("Error fetching products:", error);
		alert("There was an error loading the products.");
	}
}

async function fetchProductById(productId) {
	try {
		const response = await fetch(`${API_URL}/${productId}`);
		const product = await response.json();

		console.log(product);

		return product;
	} catch (error) {
		console.error("Error fetching product:", error);
		alert("There was an error loading the product.");
	}
}

(async function init() {
	const products = await fetchAllProducts();

	displayProducts(products);
})();
