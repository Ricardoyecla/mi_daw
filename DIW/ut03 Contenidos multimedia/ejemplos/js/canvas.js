var canvas=document.getElementById("lienzo");
 
var ctx=canvas.getContext("2d");
 
//========= Cuadro============

//relleno
ctx.fillStyle="blue";
//Crear la figura con el relleno
ctx.fillRect(10,10,100,50);

//Contorno

ctx.lineWidth=4;
ctx.strokeStyle="rgba(150,50,65,0.9)";
ctx.rect(20,20,120,70);

ctx.stroke();

//========== Circulo ================

ctx.beginPath();

ctx.arc(300,200,100,Math.PI,0);

ctx.fillStyle="green";
ctx.fill();


ctx.beginPath();

ctx.arc(400,100,50,2*Math.PI,0);

ctx.fillStyle="red";
ctx.fill();
ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.stroke();

//================ Líneas ===============


ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(200,200);
ctx.lineTo(500,300);
ctx.lineTo(1000,0);
ctx.lineTo(1000,500);

ctx.lineWidth=3;
ctx.stroke();

ctx.fillStyle="rgba(255,0,0,0.6)";
ctx.fill();

//=======Curvas =============


ctx.beginPath();

ctx.moveTo(100,40);

ctx.bezierCurveTo(0,300,400,300,500,200);
ctx.bezierCurveTo(500,100,900,100,800,300);

ctx.lineWidth=3;
ctx.strokeStyle="yellow";

ctx.stroke();

ctx.fillStyle="rgba(123,245,144,0.6)";
ctx.fill();

//========== Degradado lineal ======

var grd=ctx.createLinearGradient(700,0,600,100);
 
grd.addColorStop(0, "red");
grd.addColorStop(0.5,"blue");

grd.addColorStop(1, "yellow");

ctx.fillStyle=grd;
ctx.fillRect(600,0,100,100);

var grd2 = ctx.createRadialGradient(100, 300, 10, 80, 300, 110);
grd2.addColorStop(1, "black");
grd2.addColorStop(0, "white");

ctx.beginPath();
ctx.arc(100,300,100,0,2*Math.PI);
ctx.fillStyle=grd2;

ctx.fill();





