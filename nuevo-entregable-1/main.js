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
    return this.price * quantityToPurchase;
  }
  calculateServiceFee(quantityToPurchase) {
    return this.price * quantityToPurchase * 0.025;
  }
  productInfo() {
    return `Name: ${this.name}, Description: ${this.description}, Type: ${this.type}, Color: ${this.color}, Brand: ${this.brand}, Price: $${this.price}, Available: ${this.quantity}\n`;
  }
}

// Add warehouses by asking the user for inputs
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

let userSelection = prompt("Press 1 to add a product, 2 to buy a product, anything else to exit");
let displayProducts = "Products in BeautyStore:\n";

/* While user keeps pressing 1, they add a product through the addproduct() function, 
the prompt will keep popping up to ask the user what they want to do,
it'll stop once they enter anything other than 1 */
while (userSelection == "1") {
  products.push(addProduct());
  userSelection = prompt("Press 1 to add another product, 2 to buy a product, anything else to exit");
}

/* Display available (available == true) products if there are any.
Ask the user to select an available product from the list, change its availability to false
and calculate total price and service fee */
if (userSelection == "2") {
  if (products.length > 0) {
    let availableProducts = products.filter(product => product.quantity > 0);
    for (const product of availableProducts) {
      displayProducts += product.productInfo();
    }
    const selectedProductName = prompt(`Please type the name of your selected product from the list\n${displayProducts}`);
    const productMatch = products.find(product => product.name == selectedProductName.toUpperCase());
    if (productMatch) {
      const quantityToPurchase = Number(prompt("How many would you like to buy?"));
      productMatch.sellProduct(quantityToPurchase);
      alert(`Your total is $${productMatch.calculateTotalPrice(quantityToPurchase)}`);
      console.log(`Thank you for using BeautyStore to purchase ${productMatch.name}! BeautyStore only collected $${productMatch.calculateServiceFee(quantityToPurchase)}💰 for this transaction`);
      console.log(`Your selection: ${productMatch.productInfo()}Quantity purchased: ${quantityToPurchase}`);
    } else {
      alert("You didn't pick a valid product");
    }
  } else {
    alert("There are no products");
  }
} else {
  console.log("Thanks for using BeautyStore! Come back soon 😊")
}
