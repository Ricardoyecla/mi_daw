var canvas=document.getElementById("lienzo");
var ctx=canvas.getContext("2d");
//Variable para controlar el canal alfa
var alfa=0.5;

function pintaCielo(){
    var grd=ctx.createLinearGradient(0,0,0,600);
    grd.addColorStop(0,'rgba(0,0,255,'+alfa+')');
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,1000,500);
    
}

function pintarMar(){
    var grd=ctx.createLinearGradient(0,400,0,500);
    grd.addColorStop(0,'rgba(0,180,255,'+alfa+')');
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.fillRect(0,400,1000,200);  
}

//Coordenada izquierda base (x,y) 
function montaña(x,y,altura,base,color){
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.moveTo(x,y);
    ctx.lineTo((base/2)+x,y-altura);
    ctx.lineTo(x+base,400);
    ctx.fill();
}

function pintaNieve(x,y,altura,base){
    ctx.beginPath();
    ctx.moveTo(base/2+x,y-altura);
    ctx.lineTo(base/2+x,y-altura+altura*2/3);
    ctx.lineTo(400,400);
    ctx.fillStyle='White';
    ctx.fill();
}

pintarMar();
pintaCielo();
montaña(0,400,300,400,'BlueViolet');
montaña(400,400,300,400,'BlueViolet');
montaña(200,400,300,400,'Blue');
montaña(600,400,300,400,'Blue');
pintaNieve(0,400,300,400);



