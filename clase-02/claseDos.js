const primeraEntrada = parseInt(prompt("Ingresa la temperatura actual"));
const segundaEntrada = prompt("Está lloviendo? S/N");

if ((primeraEntrada >= 17) && ((segundaEntrada == "S") || (segundaEntrada == "s"))) {
  alert("Afuera está húmedo y hace calor! Lleva paraguas ☔");
  console.log("La temperatura es " + primeraEntrada + "C, pero al menos no hace frío...");
} else if ((primeraEntrada >= 17) && ((segundaEntrada == "N") || (segundaEntrada == "n"))) {
  alert("Afuera hace calor! Usa bloqueador 🌞");
  console.log("La temperatura es " + primeraEntrada + "C, camina por la sombra porque está fuerte el calor!");
} else if (segundaEntrada == "S" || segundaEntrada == "s") {
  alert("Afuera está húmedo y frío! Lleva un suéter e impermeable 🧥");
  console.log("La temperatura es " + primeraEntrada + "C, cuidado porque te puedes enfermar!");
} else {
  alert("Afuera hace frío! Abrígate bien 🥶");
  console.log("La temperatura es " + primeraEntrada + "C, pero al menos no está lloviendo...");
}
