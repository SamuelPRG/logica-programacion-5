function adivineElNumero(){
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let respuesta = parseInt(document.getElementById("numero").value);
    if (respuesta == numeroSecreto) {
      return document.getElementById("resultado").innerHTML = "Felicidades, adivinaste el número secreto.";
    } else 
    return document.getElementById("resultado").innerHTML = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
}