// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let ingresarNumero = parseInt(prompt("Ingresa un numero"));
// for (let i = 1; i <= 10; i++) {
//   let resultado = ingresarNumero * i;
//   console.log(ingresarNumero + " X " + i + " = " + resultado);
// }

// for (let i = 1; i <= 10; i++) {
//   let nombre = prompt("Ingresa nombre");
//   console.log("Turno " + i + ". Nombre: " + " " + nombre);
// }

// for (let i = 1; i <= 10; i++) {
//   if ((i == 4) || (i == 6)) {
//     continue; // se va a brincar el 4 y el 6
//   }
//   console.log(i);
// }

// let entrada = prompt("Ingresa un dato");
// while (entrada != "ESC") {
//   console.log("El usuario ingreso: " + entrada);
//   entrada = prompt("Ingresa otro dato");
// }

// let repetir = false;
// do {
//   console.log("Solamente una vez...");
// } while (repetir);

let entrada = prompt("Ingresa un nombre");
while (entrada != "ESC") {
  switch(entrada) {
    case "ANA":
      alert("HOLA ANA!");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("QUIEN ERES?");
      break;
  }
  entrada = prompt("Ingresa un nombre");
}
