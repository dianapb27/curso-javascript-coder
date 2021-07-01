const serviceFee = 0.025;
const selectedOption = parseInt(prompt("Please choose an option number: \n 1. Warehouse A: $1500 \n 2. Warehouse B: $1260 \n 3. Warehouse C: $1780"));
const numberOfDays = parseInt(prompt("Please enter the number of days you'll be booking"));

if (selectedOption == 1 || selectedOption == 2 || selectedOption == 3) {
  function subtotalCost(selectedOption, numberOfDays) {
    switch(selectedOption) {
      case 1:
        return 1500 * numberOfDays;
      case 2:
        return 1260 * numberOfDays;
      case 3:
        return 1780 * numberOfDays;
    }
  }

  function totalCost(subtotal) {
    return subtotal * (1 + serviceFee);
  }

  function serviceCost(subtotal) {
    return subtotal * serviceFee;
  }

alert("Your total cost is $" + totalCost(subtotalCost(selectedOption, numberOfDays)));
console.log("Your subtotal is $" + subtotalCost(selectedOption, numberOfDays) + "\n and the service fee is " + (serviceFee * 100) + "% ($" + serviceCost(subtotalCost(selectedOption, numberOfDays)) + ")");
} else {
  alert("You didn't pick a valid option, please refresh");
}
