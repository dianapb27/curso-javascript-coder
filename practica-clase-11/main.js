$("body").append(
  `<input type="text" id="sell1">
  <button id="btn3">Boton</button>
  <p class="text-danger">parrafo1</p>
  <p class="text-danger">parrafo2</p>
  <p class="text-danger">parrafo3</p>
  <p class="text-danger">parrafo4</p>`
)

const imprimir = () => {
  $("p")[2].append($("#sell1").val());
}

const consola = () => {
  console.log($("#sell1").val());
}

$("#btn3").click(imprimir);
$("#sell1").change(consola);