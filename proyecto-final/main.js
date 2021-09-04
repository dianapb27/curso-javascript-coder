// Create Product class with constructor
class Product {
  constructor(name, description, type, color, brand, price, quantity, id, imageUrl) {
    this.name = name.toUpperCase();
    this.description = `${description[0].toUpperCase()}${description.slice(1, description.count).toLowerCase()}`
    this.type = type.toUpperCase();
    this.color = color.toUpperCase();
    this.brand = brand.toUpperCase();
    this.price = Number(price);
    this.quantity = Number(quantity);
    this.id = Number(id);
    this.imageUrl = imageUrl;
  }
}

// Selectors
const showFormBtn = document.getElementById("show-form");
const requestProductBtn = document.getElementById("request-product-btn");
const requestProductForm = document.getElementById("request-product-form");

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

const showProductsBtn = document.querySelector("#show-products");

const basketCounter = document.getElementById("basket-counter");
const basketBtn = document.getElementById("basket-btn");

const basketList = document.getElementById("basket-list");
// const basketContents = document.getElementById("basket-contents");

// Variables
const jsonPath = "./assets/products.json";

// Functions -----------------------------------------------------------------------------

// Show and hide add product form
function showForm() {
  requestProductForm.classList.toggle("hidden");
  if (showFormBtn.textContent == "Request products") {
    showFormBtn.textContent = "Hide";
    showFormBtn.classList.remove("btn-info");
    showFormBtn.classList.add("btn-secondary");
  } else {
    showFormBtn.textContent = "Request products";
    showFormBtn.classList.add("btn-info");
    showFormBtn.classList.remove("btn-secondary");
  } 
}

// Save the requested products list to local storage
function saveRequestedProductsList(productsList) {
  localStorage.setItem("requestedProducts", JSON.stringify(productsList));
}

// Save the existing products list to local storage
function saveExistingProductsList(productsList) {
  localStorage.setItem("existingProducts", JSON.stringify(productsList));
}

// Save the basket in session storage
function saveBasket(productsAdded) {
  sessionStorage.setItem("basket", JSON.stringify(productsAdded));
}

// Load the products from local JSON file
function loadExistingProducts() {
  showProductsBtn.classList.add("d-none");
  let productsList = [];
  $.getJSON(jsonPath, function (response, status) {
    if (status === "success") {
      response.products.forEach(product => {
        productsList.push(product);
        saveExistingProductsList(productsList);
        displayAvailableProducts(productsList);
        document.getElementById("available-header").classList.remove("hidden");
      })
    }
    localStorage.setItem("existingProducts", JSON.stringify(productsList));
  })
  return productsList;
}

// Load the requested products list from local storage
function loadRequestedProducts() {
  let requestedProducts = [];
  let productsFromLocalStorage = JSON.parse(localStorage.getItem("requestedProducts"));
  if (productsFromLocalStorage != null) {
    productsFromLocalStorage.forEach(product => requestedProducts.push(product));
  }
  if (requestedProducts != null) {
    return requestedProducts;
  } else {
    return [];
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

// Generate an id by using a timestamp multiplied by a random number
function generateId() {
  return Math.floor(Math.random() * Date.now())
}

// Calculate total price
function calculateTotal() {
  let basket = loadBasket();
  let total = 0;
  for (const product of basket) {
    total += product.price * product.quantity;
  }
  return total
}

// Add products to your "requested" list
function requestProduct(e) {
  e.preventDefault()
  let newProductName = document.getElementById("product-name").value;
  let newProductDescription = document.getElementById("product-description").value;
  let newProductType = document.getElementById("product-type").value;
  let newProductColor = document.getElementById("product-color").value;
  let newProductBrand = document.getElementById("product-brand").value;
  let newProductPrice = document.getElementById("product-price").value;
  let newProductQuantity = document.getElementById("product-quantity").value;

  let productsList = loadRequestedProducts();
  let newProductId = generateId();
  let newProduct = new Product(newProductName, newProductDescription, newProductType, newProductColor, newProductBrand, newProductPrice, newProductQuantity, newProductId);
  productsList.push(newProduct);
  saveRequestedProductsList(productsList);
  requestProductForm.reset();
  displayRequestedProducts(productsList);
  swal(`Our team will work on finding ${newProductName}!`, "Please come back soon!", "info", {
    button: "Sounds like a plan!",
  });
}

// Add quantity to the basket and subtract it from the available qty
function addtoBasket(productsList, productId, quantity) {
  let basket = loadBasket();
  let productMatch = productsList.find(product => product.id == productId);
  productMatch.quantity = Number(quantity);
  basket.push(productMatch);
  saveBasket(basket);
  basketCounter.innerHTML = calculateBasketQuantity();
  displayBasket();
}
function sellProduct(e, productId) {
  e.preventDefault;
  let quantity = document.getElementById(`quantity-${productId}`).value;
  let productsList = JSON.parse(localStorage.getItem("existingProducts"));
  let productMatch = productsList.find(product => product.id == productId);
  productMatch.quantity -= Number(quantity);
  saveExistingProductsList(productsList);
  displayAvailableProducts(productsList);
  if (quantity > 0) {
    addtoBasket(productsList, productId, quantity);
    let newToast = document.getElementById("basketToast");
    let toast = new bootstrap.Toast(newToast);
    toast.show();
  } else {
    swal(`You know you want the ${productMatch.name}!`, "Please tell us how many 👀", "info", {
      button: "My bad!"
    });
  }
}

// Calculate quantity in basket
function calculateBasketQuantity() {
  let quantity = 0;
  let basket = loadBasket();
  basket.forEach(product => {
    quantity += product.quantity;
  });
  return quantity;
}

// Create a card for each product
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card", "p-0", "m-3");
  if (localStorage.getItem("theme") == "dark") {
    card.classList.add("bg-dark");
  }
  card.setAttribute("style", "width: 25rem");

  const productImage = document.createElement("img");
  if (loadRequestedProducts().find(requested => requested.name == product.name)) {
    productImage.setAttribute("src", "https://images.unsplash.com/photo-1616529484745-85f885b9889a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80");
  } else {
    productImage.setAttribute("src", product.imageUrl);
  }
  productImage.setAttribute("alt", "Product image");
  productImage.classList.add("product-img", "card-img-top");
  card.appendChild(productImage);

  const productInformationDiv = document.createElement("div");
  productInformationDiv.classList.add("p-2");
  card.appendChild(productInformationDiv);

  const productName = document.createElement("h4");
  productName.textContent = `${product.name}`;
  if (localStorage.getItem("theme") == "dark") {
    productName.classList.add("text-white");
  }
  productInformationDiv.appendChild(productName);

  const productPriceAndAvailability = document.createElement("div");
  if (loadRequestedProducts().find(requested => requested.name == product.name)) {
    productPriceAndAvailability.textContent = `Willing to pay: $${product.price} | Requested: ${product.quantity}`;
  } else {
    productPriceAndAvailability.textContent = `$${product.price} | Available: ${product.quantity}`;
  }
  productPriceAndAvailability.setAttribute("class", "card-subtitle mb-2 text-muted");
  productInformationDiv.appendChild(productPriceAndAvailability);

  const productDescription = document.createElement("div");
  productDescription.textContent = `${product.description}`;
  productDescription.setAttribute("class", "card-text");
  if (localStorage.getItem("theme") == "dark") {
    productDescription.classList.add("text-light");
  }
  productInformationDiv.appendChild(productDescription);

  const productDetails = document.createElement("div");
  productDetails.textContent = `Type: ${product.type} | Brand: ${product.brand} | Color: ${product.color}`;
  productDetails.setAttribute("class", "card-text");
  if (localStorage.getItem("theme") == "dark") {
    productDetails.classList.add("text-light");
  }
  productInformationDiv.appendChild(productDetails);

  const quantityInputForm = document.createElement("form");
  const quantityLabel = document.createElement("label");
  const quantityInput = document.createElement("input");
  if (loadRequestedProducts().find(requested => requested.name == product.name) == null) {
    quantityLabel.textContent = "Quantity";
    quantityLabel.classList.add("form-text");
    quantityInputForm.appendChild(quantityLabel);
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("id", `quantity-${product.id}`);
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("max", `${product.quantity}`);
    quantityInput.setAttribute("class", "form-control w-25");
    if (localStorage.getItem("theme") == "dark") {
      quantityInput.classList.add("bg-dark", "text-light");
    }
    quantityInputForm.appendChild(quantityInput);
    productInformationDiv.appendChild(quantityInputForm);
  }

  const buyProduct = document.createElement("button");
  buyProduct.setAttribute("id", `btn-${product.id}`);
  if (loadRequestedProducts().find(requested => requested.name == product.name)) {
    buyProduct.textContent = "Coming soon";
    buyProduct.setAttribute("class", "btn btn-outline-danger mt-3 w-100");
    buyProduct.setAttribute("disabled", "true");
  } else {
    buyProduct.textContent = "Add to basket";
    buyProduct.setAttribute("onclick", `sellProduct("e", ${product.id})`);
    buyProduct.setAttribute("class", "btn btn-outline-success mt-3 w-100");
  }
  productInformationDiv.appendChild(buyProduct);
  
  return card;
}

// Display shopping basket
function displayBasket() {
  let basketContents = document.createElement("div");
  $("#basket-list > div").empty();
  let basket = loadBasket();
  basketList.classList.remove("hidden");
  if (basket.length == 0) {
    let warning = document.createElement("p");
    warning.setAttribute("class", "text-warning");
    warning.textContent = "You don't have anything in your basket ☹"
    basketContents.appendChild(warning);
  } else {
    let basketList = document.createElement("ul");
    basketList.setAttribute("class", "list-group list-group-flush w-75");
    basketContents.appendChild(basketList);
    basket.forEach(product => {
      let element = document.createElement("li");
      element.setAttribute("class", "list-group-item d-flex");
      if (localStorage.getItem("theme") == "dark") {
        element.classList.add("bg-dark", "text-light");
      }
      let imgDiv = document.createElement("div");
      let img = document.createElement("img");
      img.classList.add("img-fluid", "basket-img");
      img.setAttribute("src", `${product.imageUrl}`);
      imgDiv.appendChild(img);
      element.appendChild(imgDiv);
      let text = document.createElement("p");
      text.textContent = `${product.name} | Qty: ${product.quantity} | Unit Price: $${product.price} | Subtotal: $${product.quantity * product.price}`;
      element.appendChild(text);
      basketList.appendChild(element);
    })
    let totalPrice = document.createElement("h5");
    totalPrice.setAttribute("class", "my-3");
    if (localStorage.getItem("theme") == "dark") {
      totalPrice.classList.add("text-light");
    } else {
      totalPrice.classList.remove("text-light");
    }
    let totalText = document.createElement("span");
    totalText.textContent = `$${calculateTotal()}`
    totalPrice.textContent = "Your total today is: ";
    totalPrice.appendChild(totalText);
    basketContents.appendChild(totalPrice);
    let purchaseBtn = document.createElement("button");
    purchaseBtn.setAttribute("class", "btn btn-info mb-5 pr-3");
    purchaseBtn.textContent = "Complete purchase";
    purchaseBtn.setAttribute("onclick", "completePurchase()");
    basketContents.appendChild(purchaseBtn);
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "btn btn-danger mb-5");
    removeBtn.textContent = "Empty basket";
    removeBtn.setAttribute("onclick", "emptyBasket()");
    basketContents.appendChild(removeBtn);
  }
  basketList.appendChild(basketContents);
}

// Simulate the completion of a purchase
function completePurchase() {
  sessionStorage.clear();
  basketList.classList.add("hidden");
  basketCounter.innerHTML = calculateBasketQuantity();
  swal("Thank you for your purchase!", "You're awesome 🎉😊", "success", {
    button: "Yasss!",
  });
}

// Simulate emptying the entire basket
function emptyBasket() {
  sessionStorage.clear();
  basketList.classList.add("hidden");
  basketCounter.innerHTML = calculateBasketQuantity();
  swal("We're sorry to see you go! 😞", "Come back soon!", "warning", {
    button: "Promise I will!",
  });
}

// Display available (quantity > 0) products if there are any
function displayAvailableProducts(productsList) {
  let availableProductsDiv = document.getElementById("available");
  let availableHeader = document.getElementById("available-header");
  availableHeader.classList.remove("hidden");
  availableProductsDiv.textContent = "";
  let availableProductsList = productsList.filter(product => product.quantity > 0);
  availableProductsList.forEach(product => {
    availableProductsDiv.appendChild(createProductCard(product));
  });
}

// Display products that have been requested by the user through the form
function displayRequestedProducts(productsList) {
  let requestedProductsDiv = document.getElementById("requested");
  let requestedHeader = document.getElementById("requested-header");
  requestedProductsDiv.textContent = "";
  if (productsList.length > 0) {
    let requestedProductsList = productsList.filter(product => product.quantity > 0);
    requestedProductsList.forEach(product => {
      requestedProductsDiv.appendChild(createProductCard(product));
    });
    requestedHeader.classList.remove("hidden");
    requestedHeader.innerHTML = "Here are the products you've requested:";
  } else {
    requestedHeader.classList.remove("hidden");
    requestedHeader.innerHTML = "You haven't requested any products yet";
  }
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
requestProductForm.addEventListener("submit", requestProduct);

// Getting the initial list of available products from JSON file
showProductsBtn.addEventListener("click", loadExistingProducts);

// Displaying the basket
basketBtn.addEventListener("click", displayBasket);

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

// Starting functions --------------------------------------------------------

// Check if there are existing and requested products in the local storage 
if (JSON.parse(localStorage.getItem("existingProducts")) != null) {
  displayAvailableProducts(JSON.parse(localStorage.getItem("existingProducts")));
  showProductsBtn.classList.add("d-none");
}
displayRequestedProducts(loadRequestedProducts());

// Display quantity in the basket
if (basketCounter.innerHTML == 0) {
  basketCounter.innerHTML = calculateBasketQuantity();
}
