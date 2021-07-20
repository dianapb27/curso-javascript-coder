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
function imprimirUsuario(usuario) {
  return `${usuario.nombre} ${usuario.telefono}`
}

function pedirDatos() {
  const nombre = prompt("Ingresa nombre");
  const apellido = prompt("Ingresa apellido");
  const email = prompt("Ingresa email");
  const telefono = prompt("Ingresa telefono");
  const usuario1 = new Usuario(nombre, apellido, email, telefono);
  guardarUsuario("usuario1", usuario1);
  console.log(imprimirUsuario(usuario1));
}

function guardarUsuario(clave, valor) {
  const json = JSON.stringify(valor);
  localStorage.setItem(clave, json);
}

function descargar(usuario) {
  return JSON.parse(localStorage.getItem(usuario));
}

// Logica----------------------------------

let nuevoUsuario = descargar("usuario1");

if (nuevoUsuario != null) {
  console.log(imprimirUsuario(nuevoUsuario));
} else {
  pedirDatos();
}
