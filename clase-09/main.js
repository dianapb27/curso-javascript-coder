// Create Product class with constructor and a few methods
class Product {
  constructor(name, description, type, color, brand, price, quantity, id) {
    this.name = name.toUpperCase();
    this.description = `${description[0].toUpperCase()}${description.slice(1, description.count).toLowerCase()}`
    this.type = type.toUpperCase();
    this.color = color.toUpperCase();
    this.brand = brand.toUpperCase();
    this.price = Number(price);
    this.quantity = Number(quantity);
    this.id = Number(id);
  }
  calculateTotalPrice(quantityToPurchase) {
    return this.price * quantityToPurchase * 1.025;
  }
  calculateServiceFee(quantityToPurchase) {
    return this.price * quantityToPurchase * 0.025;
  }
}

// Selectors
const showFormBtn = document.getElementById("show-form");
const addProductBtn = document.getElementById("add-product-btn");
const addProductForm = document.getElementById("add-product-form");

// Functions

// Show and hide add product form
function showForm() {
  document.getElementById("add-product-form").classList.toggle("hidden");
  if (showFormBtn.textContent == "Press to add products") {
    showFormBtn.textContent = "Press to hide";
  } else {
    showFormBtn.textContent = "Press to add products";
  } 
}

// Save the products list to local storage
function saveProductsList(productsList) {
  localStorage.setItem("productsList", JSON.stringify(productsList));
  displayProducts(productsList);
}

// Load the products in local storage or make it an empty array
function loadProducts() {
  let productsList = JSON.parse(localStorage.getItem("productsList"));
  if (productsList == null) {
    return [];
  } else {
    return productsList;
  }
}

// Add products
function addProduct(e) {
  e.preventDefault()
  let newProductName = document.getElementById("product-name").value;
  let newProductDescription = document.getElementById("product-description").value;
  let newProductType = document.getElementById("product-type").value;
  let newProductColor = document.getElementById("product-color").value;
  let newProductBrand = document.getElementById("product-brand").value;
  let newProductPrice = document.getElementById("product-price").value;
  let newProductQuantity = document.getElementById("product-quantity").value;

  let productsList = loadProducts();
  let newProductId = productsList.length + 1;
  console.log(newProductId);
  let newProduct = new Product(newProductName, newProductDescription, newProductType, newProductColor, newProductBrand, newProductPrice, newProductQuantity, newProductId);
  productsList.push(newProduct);
  saveProductsList(productsList);
  addProductForm.reset();
  displayProducts(productsList);
}

// Subtract one from the available qty
function sellProduct(productId) {
  let productsList = loadProducts();
  let productMatch = productsList.find(product => product.id == productId);
  console.log(productMatch);
  productMatch.quantity -= 1;
  saveProductsList(productsList);
  displayProducts(productsList);
}

// Create a card for each product
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productName = document.createElement("h4");
  productName.textContent = `${product.name}`
  card.appendChild(productName);

  const productPriceAndAvailability = document.createElement("div");
  productPriceAndAvailability.textContent = `$${product.price} | Available: ${product.quantity}`;
  card.appendChild(productPriceAndAvailability);

  const productDescription = document.createElement("div");
  productDescription.textContent = `${product.description}`;
  card.appendChild(productDescription);

  const productDetails = document.createElement("div");
  productDetails.textContent = `Type: ${product.type} | Brand: ${product.brand} | Color: ${product.color}`;
  card.appendChild(productDetails);

  const buyProduct = document.createElement("button");
  buyProduct.setAttribute("id", `btn-${product.id}`);
  buyProduct.setAttribute("onclick", `sellProduct(${product.id})`)
  buyProduct.textContent = "Buy 1";
  card.appendChild(buyProduct);
  
  return card;
}

// Display available (available == true) products if there are any
function displayProducts(productsList) {
  let availableProducts = document.getElementById("available");
  availableProducts.textContent = "";
  let availableProductsList = productsList.filter(product => product.quantity > 0);
  availableProductsList.forEach(product => {
    availableProducts.appendChild(createProductCard(product));
  });
}

// Event listeners
showFormBtn.addEventListener("click", showForm);
addProductBtn.addEventListener("click", addProduct);
