
const fichasRojas = document.querySelectorAll(".roja");
const fichasAzules =document.querySelectorAll(".azul");
const castillas = document.querySelectorAll(".casillas");
console.log(fichasRojas);
console.log(fichasAzules);
console.log(castillas);
let turno=0;

var bGuardarEmpezar=document.getElementById("bGuardarEmpezar");
var bEmpezarJuego=document.getElementById("bEmpezarJuego");

bGuardarEmpezar.addEventListener("click",(ev)=>{
   document.getElementById("Jugador1").innerText=document.getElementById("jugador1").value;
    document.getElementById("Jugador2").innerText=document.getElementById("jugador2").value;

    InicioJuego();
    bEmpezarJuego.disabled=true;
});

function InicioJuego() {


}