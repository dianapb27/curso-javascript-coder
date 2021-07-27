// Create Product class with constructor and a few methods
class Product {
  constructor(name, description, type, color, brand, price, quantity) {
    this.name = name.toUpperCase();
    this.description = `${description[0].toUpperCase()}${description.slice(1, description.count).toLowerCase()}`
    this.type = type.toUpperCase();
    this.color = color.toUpperCase();
    this.brand = brand.toUpperCase();
    this.price = Number(price);
    this.quantity = Number(quantity);
  }
  sellProduct(units) {
    this.quantity -= units;
  }
  calculateTotalPrice(quantityToPurchase) {
    return this.price * quantityToPurchase * 1.025;
  }
  calculateServiceFee(quantityToPurchase) {
    return this.price * quantityToPurchase * 0.025;
  }
}

// Add products by asking the user for inputs
function addProduct() {
  let newProductName = prompt("What is the name of the product you're adding?");
  let newProductDescription = prompt("Enter a short description for this product");
  let newProductType = prompt("What type of product is it (i.e., makeup, skincare, hair)?");
  let newProductColor = prompt("What is this product's color or tone?");
  let newProductBrand = prompt("What brand is this product?");
  let newProductPrice = prompt("What's the price of the product?");
  let newProductQuantity = prompt("How many units of this product do you want to add?");
  return new Product(newProductName, newProductDescription, newProductType, newProductColor, newProductBrand, newProductPrice, newProductQuantity);
}

/* Manually adding some instances of Product and saving them to the products array, 
having one already sold to test the filter function later */
let products = [];
const product1 = new Product("Eyeshadow palette", "Beautiful palette with pink and red tones", "Makeup", "Red", "Ilamasqua", 500, 1);
products.push(product1);
const product2 = new Product("Fenty lipstick set", "Red Fenty by Rihanna lipstick set", "Makeup", "Red", "Fenty", 300, 1);
products.push(product2);
const product3 = new Product("Lip serum", "Hyaluronic acid lip serum", "Skincare", "Clear", "Avant", 600, 1);
product3.sellProduct(1);
products.push(product3);

let userSelection = prompt("Press 1 to add a product, anything else to exit");

/* While user keeps pressing 1, they add a product through the addproduct() function, 
the prompt will keep popping up to ask the user what they want to do,
it'll stop once they enter anything other than 1 */
while (userSelection == "1") {
  products.push(addProduct());
  userSelection = prompt("Press 1 to add another product, anything else to exit");
}

/* Display available (available == true) products if there are any.
Also display unavailable products in a different container */
if (products.length > 0) {
  const availableProducts = products.filter(product => product.quantity > 0);
  for (const product of availableProducts) {
    let availableProductsDiv = document.createElement("div");
    availableProductsDiv.innerHTML = `<h4> ${product.name} </h4>
                                      <p><i> $${product.price}</i>  Available: ${product.quantity} </p>
                                      <p> Type: ${product.type} | Brand: ${product.brand} | Color: ${product.color} </p>
                                      <p> ${product.description} </p><br>`;
    document.getElementById("available").appendChild(availableProductsDiv);
  }
  const unavailableProducts = products.filter(product => product.quantity == 0);
  for (const product of unavailableProducts) {
    let unavailableProductsDiv = document.createElement("div");
    unavailableProductsDiv.innerHTML = `<h4> ${product.name} </h4>
                                        <p><i> $${product.price}</i>  Not available </p>
                                        <p> Type: ${product.type} | Brand: ${product.brand} | Color: ${product.color} </p>
                                        <p> ${product.description} </p><br>`;
    unavailableProductsDiv.setAttribute("class", "unavailable");
    document.getElementById("unavailable").appendChild(unavailableProductsDiv);
  }
} else {
  alert("There are no products");
}
