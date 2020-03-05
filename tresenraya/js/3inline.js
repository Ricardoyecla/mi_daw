
//Inciamos fichasRojas, fichasAzules y cas
let fichasRojas = document.querySelectorAll(".roja");
let fichasAzules =document.querySelectorAll(".azul");
const casillas = document.querySelectorAll(".casillas");
console.log(fichasRojas);
console.log(fichasAzules);
console.log(casillas);
let turno=0;

var bGuardarEmpezar=document.getElementById("bGuardarEmpezar");
var bEmpezarJuego=document.getElementById("bEmpezarJuego");

bGuardarEmpezar.addEventListener("click",(ev)=>{
    document.getElementById("Jugador1").innerText=document.getElementById("jugador1").value;
    document.getElementById("Jugador2").innerText=document.getElementById("jugador2").value;

    InicioJuego();
    bEmpezarJuego.disabled=true;
});


function empiezaArrastrarFicha(e) {
    e.dataTransfer.effectAllowed="move";
    //Guardamos la clase de ficha en data transfer
    e.dataTransfer.setData("Data",e.target.getAttribute("class").split(" ")[2]);

    console.log(e.dataTransfer.getData("Data"))
}

function finArrastrarFicha(e) {
    //No lo utilizo
}

function entrarCasilla(e) {
    e.target.classList.add("bg-light")
}

function salirCasilla(e) {
    e.target.classList.remove("bg-light")
}

function encimaCasilla(e) {
    e.preventDefault();
    return true;
}

function creaFicha(color){

    let ficha = document.createElement("img");
    let ruta=`../img/${color}.png`;
    console.log("la imagen esta en: " +ruta)
    ficha.setAttribute("src",ruta);
    ficha.setAttribute("class","m-2 w-25");
    return ficha
}

function soltarEnCasilla(e) {
    let color =e.dataTransfer.getData("Data");
    console.log(color+" soltado");
    e.target.classList.remove("bg-light");

    e.target.appendChild(creaFicha(color));

    if (color==="roja"){
        console.log("Entro enR "+color);
        fichasRojas[0].remove();
        fichasRojas = document.querySelectorAll(".roja");
    }else{
        console.log("Entro enR "+color);
        fichasAzules[0].remove();
        fichasAzules = document.querySelectorAll(".azul");
    }

    console.log("son: "+fichasRojas.length);

}

function InicioJuego() {
    console.log("InicioJuego")
    for (let ficha of fichasAzules){
        ficha.addEventListener("dragstart",empiezaArrastrarFicha,false);
        ficha.addEventListener("dragend",finArrastrarFicha,false)
    }

    for (let ficha of fichasRojas){
        ficha.addEventListener("dragstart",empiezaArrastrarFicha,false);
        ficha.addEventListener("dragend",finArrastrarFicha,false)
    }

    for (let casilla of casillas){
        casilla.addEventListener("dragenter",entrarCasilla,false);
        casilla.addEventListener("dragleave",salirCasilla,false);
        casilla.addEventListener("dragover",encimaCasilla,false);
        casilla.addEventListener("drop",soltarEnCasilla,false);
    }
}
