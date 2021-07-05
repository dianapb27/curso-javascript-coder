class Persona {
  constructor(nombre, apellido, edad, valorNeto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = Number(edad);
    this.valorNeto = Number(valorNeto);
  }
  infoPersona() {
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Valor Neto: $${this.valorNeto}\n`;
  }
}

let listaPersonas = "Personas mas ricas del mundo:\n"

let personas = [];

const bezos = new Persona("Jeff", "Bezos", 57, 201800000);
const zuckerberg = new Persona("Mark", "Zuckerberg", 37, 127700000);
const gates = new Persona("Bill", "Gates", 65, 128900000);
const arnault = new Persona("Bernard", "Arnault", 72, 189200000);
const musk = new Persona("Elon", "Musk", 50, 167300000);
personas.push(bezos);
personas.push(zuckerberg);
personas.push(gates);
personas.push(arnault);
personas.push(musk);

for (const persona of personas) {
  listaPersonas += persona.infoPersona();
}

const campoSeleccionado = prompt(`Selecciona un campo (nombre, apellido, edad, valor) para ordenar la siguiente lista\n${listaPersonas}`);
const orden = prompt("Selecciona 1 para ascendente, 2 para descendente");

listaPersonas = [];
switch(campoSeleccionado.toLowerCase()) {
  case "nombre":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.nombre > b.nombre) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por ${campoSeleccionado}:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.nombre > a.nombre) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por ${campoSeleccionado}:\n${listaPersonas}`);
    }
    break;
  case "apellido":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.apellido > b.apellido) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por ${campoSeleccionado}:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.apellido > a.apellido) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por ${campoSeleccionado}:\n${listaPersonas}`);
    }
    break;
  case "edad":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.edad > b.edad) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por ${campoSeleccionado}:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.edad > a.edad) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por ${campoSeleccionado}:\n${listaPersonas}`);
    }
    break;
  case "valor":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.valorNeto > b.valorNeto) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por ${campoSeleccionado}:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.valorNeto > a.valorNeto) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por ${campoSeleccionado}:\n${listaPersonas}`);
    }
    break;  
  default:
    alert("No elegiste un campo valido");
    break; 
}
