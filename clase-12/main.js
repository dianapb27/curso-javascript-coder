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
}

// Selectors
const showFormBtn = document.getElementById("show-form");
const addProductBtn = document.getElementById("add-product-btn");
const addProductForm = document.getElementById("add-product-form");

const nameInput = document.getElementById("product-name");
const nameRef = document.getElementById("name-ref");

const descriptionInput = document.getElementById("product-description");
const descriptionRef = document.getElementById("description-ref");

const typeInput = document.getElementById("product-type");
const typeRef = document.getElementById("type-ref");

const colorInput = document.getElementById("product-color");
const colorRef = document.getElementById("color-ref");

const brandInput = document.getElementById("product-brand");
const brandRef = document.getElementById("brand-ref");

const priceInput = document.getElementById("product-price");
const priceRef = document.getElementById("price-ref");

const quantityInput = document.getElementById("product-quantity");
const quantityRef = document.getElementById("quantity-ref");

// Functions -----------------------------------------------------------------------------

// Show and hide add product form
function showForm() {
  document.getElementById("add-product-form").classList.toggle("hidden");
  if (showFormBtn.textContent == "Click to add products") {
    showFormBtn.textContent = "Click to hide";
    showFormBtn.classList.remove("btn-info");
    showFormBtn.classList.add("btn-secondary");
  } else {
    showFormBtn.textContent = "Click to add products";
    showFormBtn.classList.add("btn-info");
    showFormBtn.classList.remove("btn-secondary");
  } 
}

// Save the products list to local storage
function saveProductsList(productsList) {
  localStorage.setItem("productsList", JSON.stringify(productsList));
  displayProducts(productsList);
}

// Save the basket in session storage
function saveBasket(productsAdded) {
  sessionStorage.setItem("basket", JSON.stringify(productsAdded));
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

// Load the basket from session storage or make it an empty array
function loadBasket() {
  let basket = JSON.parse(sessionStorage.getItem("basket"));
  if (basket == null) {
    return [];
  } else {
    return basket;
  }
}

// Generate an id by adding 1 to the highest existing id
function generateId() {
  let products = loadProducts();
  let ids = products.reduce((a, c) => (a[c.id] = c, a), {});
  let largestId = Math.max(...Object.keys(ids));
  return largestId + 1;
}

// Calculate total price
function calculateTotal() {
  let basket = loadBasket();
  let total = 0;
  for (const product of basket) {
    total += product.price
  }
  return total
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
  let newProductId = generateId();
  let newProduct = new Product(newProductName, newProductDescription, newProductType, newProductColor, newProductBrand, newProductPrice, newProductQuantity, newProductId);
  productsList.push(newProduct);
  saveProductsList(productsList);
  addProductForm.reset();
  displayProducts(productsList);
}

// Add 1 unit to the basket and subtract one from the available qty
function addtoBasket(productsList, productId) {
  let basket = loadBasket();
  let productMatch = productsList.find(product => product.id == productId);
  productMatch.quantity = 1;
  basket.push(productMatch);
  saveBasket(basket);
  console.log(`You added 1 ${productMatch.name} to your basket`);
}
function sellProduct(productId) {
  let productsList = loadProducts();
  let productMatch = productsList.find(product => product.id == productId);
  productMatch.quantity -= 1;
  saveProductsList(productsList);
  displayProducts(productsList);
  addtoBasket(productsList, productId);
  console.log(`Your total so far is $${calculateTotal()}`);
}

// Create a card for each product
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (localStorage.getItem("theme") == "dark") {
    card.classList.add("bg-dark");
  }
  card.setAttribute("style", "width: 18rem");
  card.classList.add("m-3");

  const productName = document.createElement("h4");
  productName.textContent = `${product.name}`;
  if (localStorage.getItem("theme") == "dark") {
    productName.classList.add("text-white");
  }
  card.appendChild(productName);

  const productPriceAndAvailability = document.createElement("div");
  productPriceAndAvailability.textContent = `$${product.price} | Available: ${product.quantity}`;
  productPriceAndAvailability.setAttribute("class", "card-subtitle mb-2 text-muted");
  card.appendChild(productPriceAndAvailability);

  const productDescription = document.createElement("div");
  productDescription.textContent = `${product.description}`;
  productDescription.setAttribute("class", "card-text");
  if (localStorage.getItem("theme") == "dark") {
    productDescription.classList.add("text-light");
  }
  card.appendChild(productDescription);

  const productDetails = document.createElement("div");
  productDetails.textContent = `Type: ${product.type} | Brand: ${product.brand} | Color: ${product.color}`;
  productDetails.setAttribute("class", "card-text");
  if (localStorage.getItem("theme") == "dark") {
    productDetails.classList.add("text-light");
  }
  card.appendChild(productDetails);

  const buyProduct = document.createElement("button");
  buyProduct.setAttribute("id", `btn-${product.id}`);
  buyProduct.setAttribute("onclick", `sellProduct(${product.id})`);
  buyProduct.textContent = "Add 1 to basket";
  buyProduct.setAttribute("class", "btn btn-outline-success");
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

// Functions to display and hide the form references
function displayRefName() {
  nameRef.classList.remove("d-none");
}
function hideRefName() {
  nameRef.classList.add("d-none");
}
function displayRefDescription() {
  descriptionRef.classList.remove("d-none");
}
function hideRefDescription() {
  descriptionRef.classList.add("d-none");
}
function displayRefType() {
  typeRef.classList.remove("d-none");
}
function hideRefType() {
  typeRef.classList.add("d-none");
}
function displayRefColor() {
  colorRef.classList.remove("d-none");
}
function hideRefColor() {
  colorRef.classList.add("d-none");
}
function displayRefBrand() {
  brandRef.classList.remove("d-none");
}
function hideRefBrand() {
  brandRef.classList.add("d-none");
}
function displayRefPrice() {
  priceRef.classList.remove("d-none");
}
function hideRefPrice() {
  priceRef.classList.add("d-none");
}
function displayRefQuantity() {
  quantityRef.classList.remove("d-none");
}
function hideRefQuantity() {
  quantityRef.classList.add("d-none");
}

// Event listeners ----------------------------------------------------------------------

// Showing add product form
showFormBtn.addEventListener("click", showForm);

// Adding a product
addProductForm.addEventListener("submit", addProduct);

// Show and hide form references
nameInput.addEventListener("focus", displayRefName);
nameInput.addEventListener("blur", hideRefName);
descriptionInput.addEventListener("focus", displayRefDescription);
descriptionInput.addEventListener("blur", hideRefDescription);
typeInput.addEventListener("focus", displayRefType);
typeInput.addEventListener("blur", hideRefType);
colorInput.addEventListener("focus", displayRefColor);
colorInput.addEventListener("blur", hideRefColor);
brandInput.addEventListener("focus", displayRefBrand);
brandInput.addEventListener("blur", hideRefBrand);
priceInput.addEventListener("focus", displayRefPrice);
priceInput.addEventListener("blur", hideRefPrice);
quantityInput.addEventListener("focus", displayRefQuantity);
quantityInput.addEventListener("blur", hideRefQuantity);

displayProducts(loadProducts());
