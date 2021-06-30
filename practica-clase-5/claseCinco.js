// SIMULADOR ALTA DE PERSONAS
class Persona{
  //METODO CONSTRUCTOR: CON EL CREAMOS EL OBJETO
  constructor(nuevoNombre, nuevaEdad,nuevoDNI){
      this.nombre = nuevoNombre;
      this.edad   = parseInt(nuevaEdad);
      this.dni    = parseInt(nuevoDNI);
  }
  //FUNCION QUE IMPRIME LA INFORMACION DE UN OBJETO CON CIERTO FORMATO
  informacionPersona(){
      return "NOMBRE " + this.nombre + " - EDAD " + this.edad + " - D.N.I " + this.dni + "\n" ;
  }
}
//FUNCION PARA CREAR UN OBJETO "PERSONA" CAPTURANDO ENTRADAS DE USUARIO
function crearPersona(){
  let nuevoNombre = prompt("INGRESAR NOMBRES");
  let nuevaEdad   = prompt("INGRESAR EDAD");
  let nuevoDNI    = prompt("INGRESAR DNI");
  return new Persona(nuevoNombre,nuevaEdad,nuevoDNI);
}
//CAPTURAMOS UNA ENTRADA PARA DETERMINA SI CREAMOS O NO UN OBJETO
let seleccionarOpcion = prompt("INGRESAR (1) PARA CARGAR UNA PERSONA \n PRESIONAR OTRA TECLA PARA SALIR");
let listadoPersonas   = [];
//UTILIZAMOS UN BUCLE PARA CREAR UN OBJETO LLAMANDO A LA FUNCION CADA VEZ QUE LA ENTRADA ES 1
while (seleccionarOpcion === "1"){
  listadoPersonas.push(crearPersona());
  seleccionarOpcion = prompt("INGRESAR (1) PARA CARGAR UNA PERSONA \n PRESIONAR OTRA TECLA PARA SALIR");
  // alert(mensajeFinal.toUpperCase());
}
//SI HAY UN ELEMENTO EN EL ARRAY MOSTRAMOS EL DETALLE DE CADA ELEMENTO EN UNA ALERTA
if (listadoPersonas.length > 0){
  let mensajeFinal = "PERSONAS CARGADAS \n";
  //UTILIZAMOS UN FOR..OF PARA OBTENER LA INFORMACION DE TODOS LOS OBJETOS CARGADOS
  for (const persona of listadoPersonas) {
      mensajeFinal += persona.informacionPersona();
  }
  console.log(mensajeFinal.toUpperCase());
}
