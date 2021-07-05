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

const campoSeleccionado = prompt(`Selecciona una opcion para ordenar la lista:\n1 por nombre, 2 por apellido, 3 por edad o 4 por valor neto.\n${listaPersonas}`);
const orden = prompt("Selecciona 1 para ascendente, 2 para descendente");

listaPersonas = [];
switch(campoSeleccionado) {
  case "1":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.nombre > b.nombre) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por nombre:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.nombre > a.nombre) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por nombre:\n${listaPersonas}`);
    }
    break;
  case "2":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.apellido > b.apellido) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por apellido:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.apellido > a.apellido) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por apellido:\n${listaPersonas}`);
    }
    break;
  case "3":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.edad > b.edad) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por edad:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.edad > a.edad) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por edad:\n${listaPersonas}`);
    }
    break;
  case "4":
    if (orden == "1") {
      const listaOrdenadaAscendente = personas.sort((a,b) => {
        return (a.valorNeto > b.valorNeto) ? 1 : -1;
      });
      for (const persona of listaOrdenadaAscendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden ascendente por valor neto:\n${listaPersonas}`);
    } else {
      const listaOrdenadaDescendente = personas.sort((a,b) => {
        return (b.valorNeto > a.valorNeto) ? 1 : -1;
      });
      for (const persona of listaOrdenadaDescendente) {
        listaPersonas += persona.infoPersona();
      }
      alert(`Aqui esta la lista en orden descendente por valor neto:\n${listaPersonas}`);
    }
    break;  
  default:
    alert("No elegiste un campo valido");
    break; 
}
