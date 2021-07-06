// Create Warehouse class with constructor and a few methods
class Warehouse {
  constructor(name, address, pricePerDay) {
    this.name = name.toUpperCase();
    this.address = address.toUpperCase();
    this.pricePerDay = Number(pricePerDay);
    this.available = true;
  }
  rent() {
    this.available = false;
  }
  calculateTotalPrice(numberOfDays) {
    return this.pricePerDay * numberOfDays * 1.025;
  }
  calculateServiceFee(numberOfDays) {
    return this.pricePerDay * numberOfDays * 0.025;
  }
  warehouseInfo() {
    return `Name: ${this.name}, Address: ${this.address}, Price per day: $${this.pricePerDay}, Available: ${this.available == true ? "Yes" : "No"}\n`;
  }
}

// Add warehouses by asking the user for inputs
function addWarehouse() {
  let newWarehouseName = prompt("What is the name of the warehouse you're adding?");
  let newWarehouseAddress = prompt("What is the address for this warehouse?");
  let newWarehousePricePerDay = prompt("What is the price per day to rent the warehouse?");
  return new Warehouse(newWarehouseName, newWarehouseAddress, newWarehousePricePerDay);
}

/* Manually adding some instances of Warehouse and saving them to the warehouses array, 
having one already rented to test the filter function later */
let warehouses = [];
const warehouse1 = new Warehouse("Lynn Warehouses", "123 Main St", 200);
warehouses.push(warehouse1);
const warehouse2 = new Warehouse("Green Roof", "456 Kinzie St", 146);
warehouses.push(warehouse2);
const warehouse3 = new Warehouse("Hubbard", "221 Hubbard St", 250);
warehouse3.rent();
warehouses.push(warehouse3);

let userSelection = prompt("Press 1 to add a warehouse, 2 to rent a warehouse, anything else to exit");
let displayWarehouses = "Warehouses in SafeSpace:\n";

/* While user keeps pressing 1, they add a warehouse through the addWarehouse() function, 
the prompt will keep popping up to ask the user what they want to do,
it'll stop once they enter anything other than 1 */
while (userSelection == "1") {
  warehouses.push(addWarehouse());
  userSelection = prompt("Press 1 to add another warehouse, 2 to rent a warehouse, anything else to exit");
}

/* Display available (available == true) warehouses if there are any.
Ask the user to select an available warehouse from the list, change its availability to false
and calculate total price and service fee */
if (userSelection == "2") {
  if (warehouses.length > 0) {
    let availableWarehouses = warehouses.filter(warehouse => warehouse.available == true);
    for (const warehouse of availableWarehouses) {
      displayWarehouses += warehouse.warehouseInfo();
    }
    const selectedWarehouseName = prompt(`Please type the name of your selected warehouse from the list\n${displayWarehouses}`);
    const warehouseMatch = warehouses.find(warehouse => warehouse.name == selectedWarehouseName.toUpperCase());
    if (warehouseMatch) {
      const totalDays = Number(prompt("How many days will you be renting this warehouse?"));
      warehouseMatch.rent();
      alert(`Your total is $${warehouseMatch.calculateTotalPrice(totalDays)}`);
      console.log(`Thank you for using SafeSpace to rent ${warehouseMatch.name}! SafeSpace only collected $${warehouseMatch.calculateServiceFee(totalDays)}💰 for this transaction`);
      console.log(`Your selection: ${warehouseMatch.warehouseInfo()}Number of Days: ${totalDays}`);
    } else {
      alert("You didn't pick a valid warehouse");
    }
  } else {
    alert("There are no warehouses");
  }
} else {
  console.log("Thanks for using SafeSpace! Come back soon 😊")
}
