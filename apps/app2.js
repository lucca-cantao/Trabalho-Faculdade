const span = document.querySelector(".span");
const botao = document.getElementById("enviarDados");
const apagarbtn = document.getElementById("apagar");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (input1.value == "" || input2.value == "" ){
        alert("Os campos nao podem estar em branco");
        return;
    }
    else{
    var peso = parseFloat(input1.value);
    var alturaCm = parseFloat(input2.value); 
    
    var alturaM = alturaCm / 100; 
    var resultado = peso / (alturaM ** 2); 
    span.innerHTML= resultado.toFixed(2)
    }
});
apagarbtn.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (input1.value == "" || input2.value == "") {
      alert("Os campos estao limpos");
    } else {
      span.innerHTML = "";
      input1.value = "";
      input2.value = "";
    }
  });
  