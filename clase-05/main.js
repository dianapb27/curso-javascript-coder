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
    return `Name: ${this.name}, Address: ${this.address}, Price per day: $${this.pricePerDay}, Available: ${this.available == true ? "Yes" : "No"}`;
  }
}

const warehouse1 = new Warehouse("Lynn Warehouses", "123 Main St", 200);
const warehouse2 = new Warehouse("Green Roof", "456 Kinzie St", 146);

const userSelection = prompt(`Select warehouse (enter name):\n${warehouse1.warehouseInfo()}\n${warehouse2.warehouseInfo()}`).toUpperCase();
const totalDays = Number(prompt("How many days will you be renting this warehouse?"));

if (userSelection == "LYNN WAREHOUSES") {
  warehouse1.rent();
  alert(`Your total is $${warehouse1.calculateTotalPrice(totalDays)}`);
  console.log(`Thank you for using SafeSpace to rent ${warehouse1.name}! SafeSpace only collected $${warehouse1.calculateServiceFee(totalDays)} for this transaction`);
} else if (userSelection == "GREEN ROOF") {
  warehouse2.rent();
  alert(`Your total is $${warehouse2.calculateTotalPrice(totalDays)}`);
  console.log(`Thank you for using SafeSpace to rent ${warehouse2.name}! SafeSpace only collected $${warehouse2.calculateServiceFee(totalDays)} for this transaction`);
} else {
  alert("You didn't pick an existing warehouse");
}
