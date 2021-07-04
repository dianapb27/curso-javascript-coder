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
  warehouseInfo() {
    return `Name: ${this.name}, Address: ${this.address}, Price per day: $${this.pricePerDay}, Available: ${this.available == true ? "Yes" : "No"}`;
  }
}

function addWarehouse() {
  let newWarehouseName = prompt("What is the name of the warehouse you're adding?");
  let newWarehouseAddress = prompt("What is the address for this warehouse?");
  let newWarehousePricePerDay = prompt("What is the price per day to rent the warehouse?");
  return new Warehouse(newWarehouseName, newWarehouseAddress, newWarehousePricePerDay);
}

let warehouses = [];
let userSelection = prompt("Press 1 to add a warehouse, 2 to see all warehouses, anything else to exit");
let displayWarehouses = "LIST OF WAREHOUSES\n";

while (userSelection == "1") {
  warehouses.push(addWarehouse());
  userSelection = prompt("Press 1 to add another warehouse, 2 to rent a warehouse, anything else to exit");
}

if (userSelection == "2") {
  let warehousesInList = warehouses.length;
  if (warehousesInList > 0) {
    for (const warehouse of warehouses) {
      displayWarehouses += warehouse.warehouseInfo();
    }
    let selectedWarehouse = prompt(`Please type the name of your selected warehouse from the list\n${displayWarehouses}`);
    warehouses.find()
  } else {
    alert("There are no warehouses");
  }
}

// const warehouse1 = new Warehouse("Lynn Warehouses", "123 Main St", 200);
// const warehouse2 = new Warehouse("Green Roof", "456 Kinzie St", 146);

// const userSelection = prompt(`Select a warehouse:\n`)
