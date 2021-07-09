class Empresa {
  constructor(nombre, anioCreacion, fundador) {
    this.nombre = nombre;
    this.anioCreacion = anioCreacion;
    this.fundador = fundador;
    this.cuentas = [];
  }

  agregarCuenta(cuenta) {
    this.cuentas.push(cuenta);
  }
}

class Cuenta {
  constructor(nombreTitular, tipoCuenta, diasGratis) {
    this.nombreTitular = nombreTitular;
    this.tipoCuenta = tipoCuenta;
    this.diasGratis = diasGratis;
    this.peliculasVistas = [];
  }
  verPeliculas(pelicula) {
    this.peliculasVistas.push(pelicula);
  }
}

class Pelicula {
  constructor(nombre, duracion, nombreDirector, genero) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.nombreDirector = nombreDirector;
    this.genero = genero;
  }
}