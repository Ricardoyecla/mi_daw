var canvas=document.getElementById("lienzo");

//Esta variable es para crear un contexto 2d
//Canvas esta desarrollado en poo, getContext lo que hace es
//Crea un contexto de dibujo en el liezno.
var ctx=canvas.getContext("2d");

/* ======== Cuadrados =========*/

// fillStyle es el relleno. 
ctx.fillStyle="orange";

//Metodo para crear rectangulos.
//las dos primeras coordenadas esquina superior izquierda
//las dos siguientes esquina inferior derecha
ctx.fillRect(25,25,100,100);

//Controno.
ctx.lineWidth=6;
ctx.strokeStyle= "rgba(155,125,65,0.5)";
ctx.rect(20,20,95,95);

//habilita el contorno
ctx.stroke();

//Importante el orden, a la inversa el rectangulo taparía el 
//Contorno

 
//=======-circulo_=================

//Metodo comenzar camino.
ctx.beginPath();

//El camino tiene forma de arco
//Tiene cinco parámetros coordenadas de inicio, radio,
//angulo inicio y angulo final. Los angulos en radianes.
ctx.arc(250,250,80,0,2*Math.PI);
//Rellenamos.
ctx.fillStyle="green";
//Rellena.
ctx.fill();

//medio circulo
ctx.beginPath();
ctx.arc(500,250,75,Math.PI,2*Math.PI);
ctx.fillStyle="gray";

ctx.fill();

//Contorno al circulo
//Se le aplica al circulo ya que todo lo que se haga
//viene determinado por el inicio del camino.
//ctx.beginPath()
//Si el contorno lo paso antes de empezar el camino. Este
//Se aplicaría al rectangulo.

ctx.lineWidth=4;
ctx.strokeStyle="lime";
ctx.stroke();


//=========== Líneas =================

// Comenzamos un camino
ctx.beginPath();

//Me coloco para iniciar la línea en 
ctx.moveTo(500,25);
//Pinto de 500,25 a 800,200
ctx.lineTo(800,200);
ctx.lineTo(900,400);


//Contorno línea
ctx.lineWidth=3;
//ctx.strokeStyle="xxxx" como no pongo esta propiedad
//usa la última que use es decir lima
ctx.stroke();

//====== Línea con un relleno
//Pinto la línea
ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(200,400);
ctx.lineTo(400,200);
ctx.lineTo(1000,500);

//Defino el controno de la línea mismo color
ctx.lineWidth=3;
ctx.stroke();

//Creo el relleno
ctx.fillStyle="rgba(255,0,5,0.6)";
ctx.fill();

//=========== Curvas ==================

ctx.beginPath();

ctx.moveTo(25,0);

//Los dos últimos parametros son hasta donde debe llegar
//la línea,el primer par va con el inicio y el segundo con el 
//fin, son las líneas de deformación.

ctx.bezierCurveTo(200,350,400,200,500,0);

ctx.lineWidth=3;
ctx.strokeStyle="yellow";

ctx.stroke();

ctx.fillStyle="rgba(123,245,144,0.4)";
ctx.fill();







