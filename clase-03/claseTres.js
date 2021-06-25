const numero = parseInt(prompt("Ingresa un numero del 1 al 30"));
const individual = " elefante se columpiaba sobre la tela de una araña, como veia que resistia";
const plural = " elefantes se columpiaban sobre la tela de una araña, como veian que resistia";

if (numero == 1) {
  alert("Solamente 1? Vale, vamos a cantar!")
  console.log("🎵 " + numero + individual + " no fue a llamar a otro elefante porque queria estar solo 🎵");
} else if (numero > 1 && numero <= 30) {
  alert("Vale! Vamos a cantar hasta el " + numero + "!");
  for(i = 1; i <= numero; i++) {
    switch (i) {
      case 1:
        console.log("🎵 " + i + individual + " fue a llamar a otro elefante 🎵");
        break;
      case numero:
        console.log("🎵 " + i + plural + " ya no llamaron a mas elefantes porque ya eran muchos 🎵");
        break;
      default:
        console.log("🎵 " + i + plural + " fueron a llamar a otro elefante 🎵");
        break;
    }
  }
} else {
  alert("No has ingresado un numero del 1 al 30...");
}
