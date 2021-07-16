// let nombre = "Diana";

// localStorage.setItem("nombreUsuario", nombre);

// console.log(localStorage.getItem("nombreUsuario"));


//Clases------------------------
class Usuario {
  constructor(nombre, apellido, email, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
  }
}

// Funciones ----------------------
function pedirDatos() {
  const nombre = prompt("Ingresa nombre");
  const apellido = prompt("Ingresa apellido");
  const email = prompt("Ingresa email");
  const telefono = prompt("Ingresa telefono");
  const usuario1 = new Usuario(nombre, apellido, email, telefono);
  const json = JSON.stringify(usuario1);
  guardarUsuario("usuario1", json);
}

function guardarUsuario(a, b) {
  localStorage.setItem(a, b);
}

function descargar(a) {
  return JSON.parse(localStorage.getItem(a));
}

function imprimirUsuario (a) {
  return `${a.nombre} ${a.telefono}`
}

let nuevoUsuario = descargar("usuario1");

if (nuevoUsuario != null) {
  console.log(imprimirUsuario(nuevoUsuario));
} else {
  pedirDatos();
}
