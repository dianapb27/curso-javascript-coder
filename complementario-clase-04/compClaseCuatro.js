const precioOriginal = Number(prompt("Ingresa el precio original"));
const descuento = Number(prompt("Ingresa el descuento (entre 1 y 100)"));

function nuevoPrecio(precioOriginal, descuento) {
  return precioOriginal * (1 - (descuento / 100));
}

function descuentoTotal(precioOriginal, descuento) {
  return precioOriginal * (descuento / 100);
}

alert("El precio despues del descuento es $" + nuevoPrecio(precioOriginal, descuento));

console.log("El total de la rebaja es $" + descuentoTotal(precioOriginal, descuento));
