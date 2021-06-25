let primerNumero = Number(prompt("Ingresar primer numero"));
let segundoNumero = Number(prompt("Ingresa segundo numero"));
let operacion = prompt("Que operacion quieres hacer?");

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
  }
}

console.log(calculadora(primerNumero, segundoNumero, operacion));
