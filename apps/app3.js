const span = document.querySelector(".span");
const botao = document.getElementById("enviarDados");
const apagarbtn = document.getElementById("apagar");
var input1 = document.querySelector(".input1");

function calcular(){
    const x = Math.floor(input1.value)
    const resultado = 3 * Math.pow(x, 3) - 2 * Math.pow(x,2) + x - 5;
    span.innerHTML = resultado;
}

botao.addEventListener("click",(evento) =>{
    evento.preventDefault ();
    if(input1.value == ""){
        alert("O X *pode* ser nulo");
        calcular();
    }else{
        calcular();
    }
});

apagarbtn.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (input1.value == "" && span.innerHTML == "") {
      alert("Os campos estao limpos");
    } else {
      span.innerHTML = "";
      input1.value = "";
    }
  });
  