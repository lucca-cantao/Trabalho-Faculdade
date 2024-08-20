const span = document.querySelector(".span");
const botao = document.getElementById("enviarDados");
const apagarbtn = document.getElementById("apagar");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");

botao.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    alert("Os campos nao podem estar em branco");
    return;
  } 
  else {
    var x = Math.floor(input1.value);
    var y = Math.floor(input2.value);
    var z = Math.floor(input3.value);

    var soma = x + y + z;
    var media = soma / 3;

    span.innerHTML = media;
  }
});

apagarbtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    alert("Os campos estao limpos");
  } else {
    span.innerHTML = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
});
