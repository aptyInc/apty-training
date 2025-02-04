const productsContainer = document.getElementById("products-container");

function renderEachProduct(product) {
  const productCardContainer = document.createElement("div");
  productCardContainer.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName !== "DETAILS") {
      const productData = { id: product.id };
      sessionStorage.setItem("selectedProduct", JSON.stringify(productData));
      location = "../product-item/product-item.html";
    }
  });
  productCardContainer.classList.add("product-card");
  productsContainer.appendChild(productCardContainer);

  // Product Image
  const productImageElement = document.createElement("img");
  productImageElement.src = product.images[0];
  productImageElement.classList.add("product-image");
  productCardContainer.appendChild(productImageElement);

  // Title
  const titleElement = document.createElement("h3");
  titleElement.textContent = `Title: ${product.title}`;
  productCardContainer.appendChild(titleElement);

  // Brand
  const brandElement = document.createElement("h6");
  brandElement.style.color = "#594D6D";
  brandElement.textContent = `By: ${product.brand}`;
  productCardContainer.appendChild(brandElement);

  //price and rating container
  const priceContainer = document.createElement("div");
  priceContainer.classList.add("price-container");
  productCardContainer.appendChild(priceContainer);

  // Price
  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `Price: $${product.price}`;
  priceContainer.appendChild(priceElement);

  //rating container

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating");
  priceContainer.appendChild(ratingContainer);

  const ratingImageElement = document.createElement("img");
  ratingImageElement.src =
    "https://assets.ccbp.in/frontend/react-js/star-img.png";

  ratingContainer.appendChild(ratingImageElement);

  // Rating
  const ratingElement = document.createElement("p");

  ratingElement.textContent = product.rating;
  ratingContainer.appendChild(ratingElement);

  //show more
  const showMoreElement = document.createElement("details");
  showMoreElement.style.textAlign = "left";
  productCardContainer.appendChild(showMoreElement);

  // Description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;
  showMoreElement.appendChild(descriptionElement);

  // Category
  const categoryElement = document.createElement("p");
  categoryElement.textContent = `Category: ${product.category}`;
  showMoreElement.appendChild(categoryElement);

  // Availability Status
  const availabilityElement = document.createElement("p");
  availabilityElement.textContent = `Availability: ${product.availabilityStatus}`;
  showMoreElement.appendChild(availabilityElement);

  // Dimensions
  const dimensionsElement = document.createElement("p");
  dimensionsElement.textContent = `Dimensions: ${product.dimensions.width} x ${product.dimensions.height}`;
  showMoreElement.appendChild(dimensionsElement);

  // Return Policy
  const returnPolicyElement = document.createElement("p");
  returnPolicyElement.textContent = `Return Policy: ${product.returnPolicy}`;
  showMoreElement.appendChild(returnPolicyElement);

  // Tags
  const tagsElement = document.createElement("p");
  tagsElement.textContent = `Tags: ${product.tags.join(", ")}`;
  showMoreElement.appendChild(tagsElement);

  // Thumbnail
  const thumbnailElement = document.createElement("img");
  thumbnailElement.src = product.thumbnail;
  thumbnailElement.classList.add("product-thumbnail");
  showMoreElement.appendChild(thumbnailElement);

  // Warranty Information
  const warrantyElement = document.createElement("p");
  warrantyElement.textContent = `Warranty: ${product.warrantyInformation}`;
  showMoreElement.appendChild(warrantyElement);

  // Stock
  const stockElement = document.createElement("p");
  stockElement.textContent = `Stock: ${product.stock}`;
  showMoreElement.appendChild(stockElement);
}

function renderingProducts(productsList) {
  productsContainer.innerHTML = "";
  if (productsList.products.length === 0) {
    productsContainer.style.justifyContent = "center";

    let paragraphElementNotFound = document.createElement("h1");
    paragraphElementNotFound.style.fontSize = "57px";
    paragraphElementNotFound.style.color = "orangered";
    paragraphElementNotFound.style.padding = "30px";
    paragraphElementNotFound.textContent = "Products Not Found";
    productsContainer.appendChild(paragraphElementNotFound);
  } else {
    productsList.products.map((eachProduct) => {
      renderEachProduct(eachProduct);
      console.log(eachProduct.images);
    });
  }
}

let filteredProducts = [];

const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    filteredProducts = data;
    renderingProducts(filteredProducts);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

fetchAllProducts();

const fetchSearchedProducts = async (searchInputValue) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchInputValue}`
    );
    const data = await response.json();
    filteredProducts = data;
    renderingProducts(filteredProducts);
  } catch (error) {
    console.log(error.message);
  }
};

const debouncedFetchSearchedProducts = debounce(fetchSearchedProducts, 300);

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (event) => {
  debouncedFetchSearchedProducts(event.target.value);
});
