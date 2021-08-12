// Boton up resta a la posicion top para mover hacia arriba
$("#btn-up").click(() => {
  $("#cuadro").animate({  top: '-=50px' })
              .css("background-color", "green");
});

// Boton down suma a la posicion top para mover hacia abajo
$("#btn-down").click(() => {
  $("#cuadro").animate({  top: '+=50px' })
              .css("background-color", "teal");
});

// Boton left resta a la posicion left para mover hacia la izquierda
$("#btn-left").click(() => {
  $("#cuadro").animate({  left: '-=50px' })
              .css("background-color", "crimson");
});

// Boton right suma a la posicion left para mover hacia la derecha
$("#btn-right").click(() => {
  $("#cuadro").animate({  left: '+=50px' })
              .css("background-color", "blue");
});
